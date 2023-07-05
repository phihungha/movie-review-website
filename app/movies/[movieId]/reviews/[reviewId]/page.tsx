"use client";
import Image from "next/image";
import { ICrewCard } from "@/components/CrewCard";
import { MovieData } from "@/components/MovieCard";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Button from "@mui/material/Button";
import Link from "next/link";
import useSWR from "swr";

function HandleSave() {
  console.log("api here!");
  return;
}

function HandleDelete() {
  console.log("api here!");
  return;
}

interface ReviewDetailsProps {
  params: {
    reviewId: string;
  };
}
function GetUser(userId: string): ICrewCard {
  const { data, error } = useSWR(`/users/${userId}`);
  const user: ICrewCard = {
    id: data?.id,
    Name: data?.username,
    role: data?.userType,
    avatar_path: data?.avatarUrl,
  };
  return user;
}

function GetMovie(movieId: string): MovieData {
  const { data, error } = useSWR(`/movies/${movieId}`);
  const movie: MovieData = {
    id: data?.id,
    title: data?.title,
    releaseDate: data?.releaseDate,
    posterUrl: data?.posterUrl,
    criticScore: data?.criticScore,
    regularScore: data?.regularScore,
  };
  return movie;
}

export default function ReviewDetails({ params }: ReviewDetailsProps) {
  const { data, error } = useSWR(`/reviews/${params.reviewId}`);
  const user = GetUser(data?.authorId);
  const movie = GetMovie(data?.movieId);
  const formatScore = data?.score;
  return (
    <div>
      <div className="flex whitespace-nowrap flex-row p-0 w-full">
        <div className="flex flex-col text-center place-items-center p-20 gap-10">
          <Image
            className="rounded"
            src={movie.posterUrl}
            width={240}
            height={380}
            alt={movie.title}
          />
          <h2 className="text-3xl not-italic font-bold text-gray-900">
            {movie.title}
          </h2>
        </div>
        <div className="flex flex-col items-start w-9/12 p-20 gap-3">
          <div className="flex whitespace-nowrap flex-row p-0">
            <Avatar
              className="items-center text-center w-16 h-16"
              src={user.avatar_path}
              alt={user.Name}
              sx={{ width: 30, height: 30 }}
            />
            <div className="flex flex-col justify-center items-center gap-1">
              <h2 className="w-24 h-5 not-italic font-normal items-center text-center text-base leading-6 text-black-100">
                {user.Name}
              </h2>
              <h2 className="w-12 h-4 not-italic font-normal items-center text-center text-xs leading-4 text-black-500">
                {user.role}
              </h2>
            </div>
          </div>
          <Divider className="w-full" />
          <TextField
            className="w-full not-italic font-bold text-base leading-6 text-gray-100"
            value={data?.title}
          />
          <TextField
            className="w-full"
            id="description"
            value={data?.content}
            multiline
            rows={4}
          />
          <div className="flex flex-row items-center gap-10 p-0 h-6">
            <Rating size="medium" value={formatScore} max={10} />
          </div>
          <div className="flex flex-row justify-center w-full gap-10 pt-10 h-6">
            <div className="self-center">
              <Button
                color="error"
                className="px-20"
                variant="outlined"
                onClick={HandleDelete}
              >
                Delete
              </Button>
            </div>
            <div className="self-center">
              <Button className="px-20" variant="outlined" onClick={HandleSave}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
