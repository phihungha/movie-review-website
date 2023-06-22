import Image from "next/image";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
export interface IMovieCard {
  id: number;
  title: string;
  year: number;
  poster_path: string;
  critic_score: number;
  regular_score: number;
}

const MovieCard = ({ movie }: { movie: IMovieCard }) => {
  const link = "/movies/" + movie.id.toString();
  return (
    <Link href={link}>
      <div className="flex flex-col items-start p-0">
        <div className="flex flex-col justify-center items-center p-0">
          <Image
            className="rounded"
            src={movie.poster_path}
            width={137}
            height={120}
            alt={movie.title}
          />
        </div>
        <div className="flex flex-col items-start p-0 w-32 h-7">
          <h2 className="w-24 h-5 not-italic font-normal text-base leading-6 text-black-100">
            {movie.title}
          </h2>
        </div>

        <div className="flex flex-col items-start p-0 w-32 h-7">
          <h2 className="w-24 h-5 not-italic font-normal text-xs leading-6 text-black-500">
            {movie.year}
          </h2>
        </div>

        <div className="flex flex-row justify-center items-center p-0 w-32 h-5">
          <div className="flex flex-row items-center w-20 h-5 gap-1">
            <StarIcon color="primary" />
            <h2 className="w-12 h-4 not-italic font-normal text-xs leading-4 text-black-500">
              {movie.critic_score}
            </h2>
          </div>
          <div className="flex flex-row items-center w-10 h-5 gap-1">
            <StarIcon color="warning" />
            <h2 className="w-12 h-4 not-italic font-normal text-xs leading-4 text-black-500">
              {movie.regular_score}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
