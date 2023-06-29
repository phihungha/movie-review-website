"use client";
import MovieCard from "@/components/MovieCard";
import * as React from "react";

type Movie = {
  id: number;
  title: string;
  year: number;
  poster_path: string;
  critic_score: number;
  regular_score: number;
};

const movies: Movie[] = [
  {
    id: 1,
    title: "John Wick",
    year: 2014,
    poster_path:
      "https://static.wikia.nocookie.net/john-wick8561/images/7/7c/Chapterfour.jpeg/revision/latest?cb=20230523074638",
    critic_score: 7,
    regular_score: 8,
  },
  {
    id: 2,
    title: "John Wick",
    year: 2014,
    poster_path:
      "https://static.wikia.nocookie.net/john-wick8561/images/7/7c/Chapterfour.jpeg/revision/latest?cb=20230523074638",
    critic_score: 7,
    regular_score: 8,
  },
  {
    id: 3,
    title: "John Wick",
    year: 2014,
    poster_path:
      "https://static.wikia.nocookie.net/john-wick8561/images/7/7c/Chapterfour.jpeg/revision/latest?cb=20230523074638",
    critic_score: 7,
    regular_score: 8,
  },
  {
    id: 4,
    title: "John Wick",
    year: 2014,
    poster_path:
      "https://static.wikia.nocookie.net/john-wick8561/images/7/7c/Chapterfour.jpeg/revision/latest?cb=20230523074638",
    critic_score: 7,
    regular_score: 8,
  },
  {
    id: 5,
    title: "John Wick",
    year: 2014,
    poster_path:
      "https://static.wikia.nocookie.net/john-wick8561/images/7/7c/Chapterfour.jpeg/revision/latest?cb=20230523074638",
    critic_score: 7,
    regular_score: 8,
  },
  {
    id: 6,
    title: "John Wick",
    year: 2014,
    poster_path:
      "https://static.wikia.nocookie.net/john-wick8561/images/7/7c/Chapterfour.jpeg/revision/latest?cb=20230523074638",
    critic_score: 7,
    regular_score: 8,
  },
];

export default function PersonalWatchedMovies() {
  return (
    <div className="grid place-items-center grid-cols-4 p-5 gap-10 justify-center">
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
