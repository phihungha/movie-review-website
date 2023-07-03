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

const crews: ICrewCard[] = [
  {
    id: 1,
    Name: "Trung",
    role: "Director",
    avatar_path: "",
  },
  {
    id: 2,
    Name: "Trung",
    role: "Director",
    avatar_path: "",
  },
  {
    id: 3,
    Name: "Trung",
    role: "Director",
    avatar_path: "",
  },
  {
    id: 4,
    Name: "Trung",
    role: "Director",
    avatar_path: "",
  },
  {
    id: 5,
    Name: "Trung",
    role: "Director",
    avatar_path: "",
  },
];

const sampleuser: ICrewCard = {
  id: 10,
  Name: "Trung",
  role: "Critic",
  avatar_path: "",
};

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

function HandleSubmit() {
  console.log("api here!");
  return;
}

export default function MovieDetails({ params }: MovieDetailsProps) {
  const { data, error } = useSWR(`/movies/${params.movieId}`);
  const link = "/movies/" + params.movieId + "/reviews";
  return (
    <div className="place-items-center content-center">
      <div className="flex whitespace-nowrap flex-row p-0 w-full">
        <div className="flex flex-col place-items-center p-20 gap-10">
          <Image
            className="rounded"
            src={data?.posterUrl}
            width={240}
            height={380}
            alt={data?.title}
          />
          <Rating size="large" name="read-only" value={4.5} readOnly />
        </div>
        <div className="flex flex-col items-start w-9/12 p-20 gap-3 ">
          <h2 className="text-5xl not-italic font-bold text-gray-900">
            {data?.title}
          </h2>
          <div className="flex flex-row items-center gap-1">
            <StarIcon sx={{ fontSize: 30 }} color="warning" />
            <h2 className="text-xl not-italic font-normal leading-4 text-black-500">
              {data?.criticScore}
            </h2>
          </div>
          <div>
            <h2 className="text-lg not-italic font-normal leading-4 text-black-100 whitespace-pre-line">
              {data?.synopsis}
            </h2>
          </div>
          <Divider className="w-full" />
          <div className="flex flex-row p-0 gap-4 h-40 w-full overflow-auto">
            {crews.map((crew: ICrewCard) => (
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
            <Rating size="medium" value={4.5} />
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
