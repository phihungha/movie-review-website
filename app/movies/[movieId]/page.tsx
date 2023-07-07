"use client";
import React from "react";
import CrewCard, { ICrewCard } from "@/components/CrewCard";
import ReviewCard, { IReviewCard } from "@/components/ReviewCard";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import Link from "next/link";
import useSWR from "swr";
import { axiosInstance, getAuthHeader } from "@/lib/client-api";

async function postReview(
  movieId: string,
  title: string,
  content: string,
  score: number
) {
  await axiosInstance.post(
    `/movies/${movieId}/reviews/`,
    {
      title,
      content,
      score,
    },
    { headers: await getAuthHeader() }
  );
}

export default function MovieDetails({ params }: MovieDetailsProps) {
  const movieId = params.movieId;

  const { data, mutate } = useSWR(`/movies/${movieId}`);

  const formatyear = new Date(data?.releaseDate).getFullYear().toString();
  const genres: Genre[] = [];
  const crews: ICrewCard[] = [];
  const casts: ICrewCard[] = [];
  data?.directors.map((director: Director) =>
    crews.push(ChangeType(director, "Director"))
  );
  data?.writers.map((director: Director) =>
    crews.push(ChangeType(director, "Writer"))
  );
  data?.dops.map((director: Director) =>
    crews.push(ChangeType(director, "DoP"))
  );
  data?.editors.map((director: Director) =>
    crews.push(ChangeType(director, "Editor"))
  );
  data?.composers.map((director: Director) =>
    crews.push(ChangeType(director, "Composer"))
  );
  data?.actingCredits.map((cast: Cast) => casts.push(ChangeTypeCast(cast)));
  data?.genres.map((genre: Genre) => genres.push(genre));
  const link = "/movies/" + params.movieId + "/reviews";

  const [rating, setRating] = React.useState<number | null>(0);
  const [reviewTitle, setReviewTitle] = React.useState("");
  const [reviewContent, setReviewContent] = React.useState("");

  async function onReviewSubmit() {
    if (!rating) {
      return;
    }
    await postReview(movieId, reviewTitle, reviewContent, rating);
    mutate();
  }

  function onWatchPressed() {
    console.log("api here!");
    return;
  }

  return (
    <div className="place-items-center content-center">
      <div className="flex w-full flex-row whitespace-nowrap p-20">
        <div className="flex w-full flex-col place-items-center gap-10">
          <Image
            className="rounded"
            src={data?.posterUrl}
            width={350}
            height={300}
            alt={data?.title}
          />
        </div>
        <div className="flex flex-col items-start gap-3 px-20 ">
          <h2 className="text-5xl font-bold not-italic text-gray-900">
            {data?.title}
          </h2>
          <h2 className="text-2xl font-bold not-italic text-gray-900">
            {formatyear}
          </h2>
          <div className="flex flex-row items-center gap-1">
            {genres.map((genre: Genre) => (
              <h2
                key={genre.id}
                className="text-black-500 pr-2 text-xl font-normal not-italic leading-4"
              >
                {genre.name}
              </h2>
            ))}
          </div>
          <div>
            <h2 className="text-black-100 whitespace-pre-line text-lg font-normal not-italic leading-4">
              {data?.synopsis}
            </h2>
          </div>
          <Divider className="w-full" />
          <h2 className="pb-2 pt-0 text-center text-xl font-bold not-italic text-gray-900">
            Crews
          </h2>
          <div className="flex h-40 w-full flex-row gap-4 overflow-auto p-0">
            {crews.map((crew: ICrewCard) => (
              <CrewCard key={crew.id} user={crew} />
            ))}
          </div>
          <h2 className="pb-2 pt-0 text-center text-xl font-bold not-italic text-gray-900">
            Casts
          </h2>
          <div className="flex h-40 w-full flex-row gap-4 overflow-auto p-0">
            {casts.map((crew: ICrewCard) => (
              <CrewCard key={crew.id} user={crew} />
            ))}
          </div>
        </div>
        <div className="flex flex-col place-items-center gap-5">
          <Button
            className="flex w-full flex-col place-items-center"
            variant="outlined"
            onClick={onWatchPressed}
          >
            <VisibilityIcon />
            <h2 className="text-black-500 py-1 text-base font-normal not-italic leading-4">
              Watch
            </h2>
          </Button>
          <div className="flex w-full flex-row place-items-center gap-10">
            <div className="flex w-36 flex-col place-items-end rounded bg-slate-300 p-5">
              <div className="flex flex-row items-center gap-1">
                <StarIcon sx={{ fontSize: 30 }} color="warning" />
                <h2 className="text-black-500 text-base font-normal not-italic leading-4">
                  {data?.criticScore}
                </h2>
              </div>
              <h2 className="text-black-500 py-1 text-base font-normal not-italic leading-4">
                Critic Score
              </h2>
              <h2 className="text-black-500 py-1 text-base font-normal not-italic leading-4">
                {data?.criticReviewCount} reviews
              </h2>
            </div>

            <div className="flex w-36 flex-col place-items-start rounded bg-slate-300 p-5">
              <div className="flex flex-row items-center gap-1">
                <h2 className="text-black-500 text-base font-normal not-italic leading-4">
                  {data?.regularScore}
                </h2>
                <StarIcon sx={{ fontSize: 30 }} color="primary" />
              </div>
              <h2 className="text-black-500 py-1 text-base font-normal not-italic leading-4">
                Regular Score
              </h2>
              <h2 className="text-black-500 py-1 text-base font-normal not-italic leading-4">
                {data?.regularReviewCount} reviews
              </h2>
            </div>
          </div>
        </div>
      </div>
      <h2 className="px-20 pt-0 text-2xl font-bold not-italic text-gray-900">
        Your Review
      </h2>
      <div className="h-100 flex w-full flex-row place-items-center px-20 pt-10">
        <Avatar
          className="h-16 w-16 items-center text-center"
          src=""
          alt={"Trung"}
          sx={{ width: 30, height: 30 }}
        />
        <div className="bg-blue flex w-full flex-col items-start gap-5 pl-3">
          <TextField
            className="w-full text-base font-bold not-italic leading-6 text-gray-100"
            label="Review Title"
            onChange={(i) => setReviewTitle(i.target.value)}
            value={reviewTitle}
          />
          <TextField
            className="w-full"
            id="description"
            label="Description"
            value={reviewContent}
            onChange={(i) => setReviewContent(i.target.value)}
            multiline
            rows={4}
          />
          <div className="flex h-6 flex-row items-center gap-10 p-0">
            <Rating
              size="medium"
              value={rating}
              onChange={(_, rating) => setRating(rating)}
              max={10}
            />
          </div>
        </div>
      </div>
      <div className="items-end px-20 pt-10 text-end">
        <Button
          className="px-20"
          variant="outlined"
          onClick={() => onReviewSubmit()}
        >
          Submit
        </Button>
      </div>
      <h2 className="px-20 pt-20 text-2xl font-bold not-italic text-gray-900">
        Reviews
      </h2>
      <div className="w-full">
        <MovieReviews params={params} />
      </div>
      <Link href={link}>
        <h2 className="px-20 pb-20 pt-0 text-center text-xl font-bold not-italic text-gray-900">
          All Reviews
        </h2>
      </Link>
    </div>
  );
}

type Genre = {
  id: string;
  name: string;
};

type Director = {
  id: string;
  name: string;
  avatarUrl: string;
};

type Cast = {
  movieId: string;
  crewId: string;
  characterName: string;
  crew: Crew;
};

type Crew = {
  id: string;
  name: string;
  avatarUrl: string;
};

function ChangeType(director: Director, role: string): ICrewCard {
  const crew: ICrewCard = {
    id: director.id,
    name: director.name,
    role: role,
    avatarUrl: director.avatarUrl,
  };
  return crew;
}

function ChangeTypeCast(cast: Cast): ICrewCard {
  const crew: ICrewCard = {
    id: cast.crewId,
    name: cast.crew.name,
    role: cast.characterName,
    avatarUrl: cast.crew.avatarUrl,
  };
  return crew;
}

interface MovieDetailsProps {
  params: {
    movieId: string;
  };
}

function MovieReviews({ params }: MovieDetailsProps) {
  const { data } = useSWR(`/movies/${params.movieId}/reviews`);
  return (
    <div className="grid grid-rows-1 place-items-start justify-start gap-10 px-20 pb-10 pt-10">
      {data?.map((review: IReviewCard) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
