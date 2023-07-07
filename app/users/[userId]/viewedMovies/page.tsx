"use client";
import MovieCard, { MovieData } from "@/components/MovieCard";
import * as React from "react";
import useSWR from "swr";

interface UserDetailsProps {
  params: {
    userId: string;
  };
}

export default function UserWatchedMovies({ params }: UserDetailsProps) {
  const { data, error } = useSWR(`/users/${params.userId}/viewed-movies`);
  return (
    <div className="grid grid-cols-4 place-items-center justify-center gap-10 p-5">
      {data?.map((movie: MovieData) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
