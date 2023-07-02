"use client";
import MovieCard, { MovieData } from "@/components/MovieCard";
import * as React from "react";

const movies: MovieData[] = [];

export default function PersonalWatchedMovies() {
  return (
    <div className="grid place-items-center grid-cols-4 p-5 gap-10 justify-center">
      {movies.map((movie: MovieData) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
