"use client";

import Image from "next/image";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

export interface MovieData {
  id: number;
  title: string;
  releaseDate: string;
  posterUrl: string;
  criticScore: number;
  regularScore: number;
}

export default function MovieCard({ movie }: { movie: MovieData }) {
  const link = "/movies/" + movie.id;
  const formatyear = new Date(movie.releaseDate).getFullYear().toString();
  return (
    <Link href={link}>
      <div className="flex flex-col items-start p-0">
        <div className="flex flex-col items-center justify-center p-0">
          <Image
            className="rounded"
            src={movie.posterUrl}
            width={137}
            height={120}
            alt={movie.title}
          />
        </div>
        <div className="flex h-7 w-32 flex-col items-start p-0">
          <h2 className="text-black-100 h-5 w-24 text-base font-normal not-italic leading-6">
            {movie.title}
          </h2>
        </div>

        <div className="flex h-7 w-32 flex-col items-start p-0">
          <h2 className="text-black-500 h-5 w-24 text-xs font-normal not-italic leading-6">
            {formatyear}
          </h2>
        </div>

        <div className="flex h-5 w-32 flex-row items-center justify-center p-0">
          <div className="flex h-5 w-20 flex-row items-center gap-1">
            <StarIcon color="primary" />
            <h2 className="text-black-500 h-4 w-12 text-xs font-normal not-italic leading-4">
              {movie.criticScore}
            </h2>
          </div>
          <div className="flex h-5 w-10 flex-row items-center gap-1">
            <StarIcon color="warning" />
            <h2 className="text-black-500 h-4 w-12 text-xs font-normal not-italic leading-4">
              {movie.regularScore}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
