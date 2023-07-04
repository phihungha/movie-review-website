"use client";

import CrewCard, { ICrewCard } from "@/components/CrewCard";
import ReviewCard, { IReviewCard } from "@/components/ReviewCard";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Button from "@mui/material/Button";
import Link from "next/link";
import useSWR from "swr";

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
};

function ChangeType(director: Director, role: string): ICrewCard {
  const crew: ICrewCard = {
    id: director.id,
    Name: director.name,
    role: role,
    avatar_path: director.avatarUrl,
  };
  return crew;
}

function ChangeTypeCast(cast: Cast): ICrewCard {
  const crew: ICrewCard = {
    id: cast.crewId,
    Name: "",
    role: cast.characterName,
    avatar_path: "",
  };
  return crew;
}

interface MovieDetailsProps {
  params: {
    movieId: string;
  };
}

function MovieReviews({ params }: MovieDetailsProps) {
  const { data, error } = useSWR(`/movies/${params.movieId}/reviews`);
  return (
    <div className="grid place-items-start grid-rows-1 pb-10 pt-10 gap-10 px-20 justify-start">
      {data?.map((review: IReviewCard) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}

export default function MovieDetails({ params }: MovieDetailsProps) {
  const { data, error } = useSWR(`/movies/${params.movieId}`);
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

  function HandleSubmit() {
    console.log("api here!");
    return;
  }
  return (
    <div className="place-items-center content-center">
      <div className="flex whitespace-nowrap flex-row p-0 w-full">
        <div className="flex flex-col place-items-center p-20 gap-10">
          <Image
            className="rounded"
            src={data?.posterUrl}
            width={350}
            height={300}
            alt={data?.title}
          />
          <div className="flex flex-row w-full place-items-center  gap-5">
            <div className="flex flex-col place-items-end p-5 bg-slate-300 rounded w-full">
              <div className="flex flex-row items-center gap-1">
                <StarIcon sx={{ fontSize: 30 }} color="warning" />
                <h2 className="text-base not-italic font-normal leading-4 text-black-500">
                  {data?.criticScore}
                </h2>
              </div>
              <h2 className="py-1 text-base not-italic font-normal leading-4 text-black-500">
                Critic Score
              </h2>
              <h2 className="py-1 text-base not-italic font-normal leading-4 text-black-500">
                {data?.criticReviewCount} reviews
              </h2>
            </div>

            <div className="flex flex-col place-items-start bg-slate-300 p-5 rounded w-full">
              <div className="flex flex-row items-center gap-1">
                <h2 className="text-base not-italic font-normal leading-4 text-black-500">
                  {data?.regularScore}
                </h2>
                <StarIcon sx={{ fontSize: 30 }} color="primary" />
              </div>
              <h2 className="py-1 text-base not-italic font-normal leading-4 text-black-500">
                Regular Score
              </h2>
              <h2 className="py-1 text-base not-italic font-normal leading-4 text-black-500">
                {data?.regularReviewCount} reviews
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-9/12 p-20 gap-3 ">
          <h2 className="text-5xl not-italic font-bold text-gray-900">
            {data?.title}
          </h2>
          <h2 className="text-2xl not-italic font-bold text-gray-900">
            {formatyear}
          </h2>
          <div className="flex flex-row items-center gap-1">
            {genres.map((genre: Genre) => (
              <h2
                key={genre.id}
                className="text-xl not-italic font-normal pr-2 leading-4 text-black-500"
              >
                {genre.name}
              </h2>
            ))}
          </div>
          <div>
            <h2 className="text-lg not-italic font-normal leading-4 text-black-100 whitespace-pre-line">
              {data?.synopsis}
            </h2>
          </div>
          <Divider className="w-full" />
          <h2 className="text-xl pt-0 pb-2 text-center not-italic font-bold text-gray-900">
            Crews
          </h2>
          <div className="flex flex-row p-0 gap-4 h-40 w-full overflow-auto">
            {crews.map((crew: ICrewCard) => (
              <CrewCard key={crew.id} user={crew} />
            ))}
          </div>
          <h2 className="text-xl pt-0 pb-2 text-center not-italic font-bold text-gray-900">
            Casts
          </h2>
          <div className="flex flex-row p-0 gap-4 h-40 w-full overflow-auto">
            {casts.map((crew: ICrewCard) => (
              <CrewCard key={crew.id} user={crew} />
            ))}
          </div>
        </div>
      </div>
      <h2 className="text-2xl pt-0 px-20 not-italic font-bold text-gray-900">
        Your Review
      </h2>
      <div className="flex flex-row w-full place-items-center h-100 pt-10 px-20">
        <Avatar
          className="items-center text-center w-16 h-16"
          src=""
          alt={"Trung"}
          sx={{ width: 30, height: 30 }}
        />
        <div className="flex flex-col items-start gap-5 bg-blue w-full pl-3">
          <TextField
            className="w-full not-italic font-bold text-base leading-6 text-gray-100"
            label="Review Title"
          />
          <TextField
            className="w-full"
            id="description"
            label="Description"
            multiline
            rows={4}
          />
          <div className="flex flex-row items-center gap-10 p-0 h-6">
            <Rating size="medium" value={4.5} max={10} />
          </div>
        </div>
      </div>
      <div className="px-20 pt-10 items-end text-end">
        <Button className="px-20" variant="outlined" onClick={HandleSubmit}>
          Submit
        </Button>
      </div>
      <h2 className="text-2xl pt-20 px-20 not-italic font-bold text-gray-900">
        Reviews
      </h2>
      <div className="w-full">
        <MovieReviews params={params} />
      </div>
      <Link href={link}>
        <h2 className="text-xl pt-0 px-20 pb-20 text-center not-italic font-bold text-gray-900">
          All Reviews
        </h2>
      </Link>
    </div>
  );
}
