"use client";

import MovieCard, { MovieData } from "@/components/MovieCard";
import useSWR from "swr";
import MovieListOptionsBar, { MovieListOptions } from "./MovieListOptionsBar";
import React from "react";

export default function MovieList() {
  const [options, setOptions] = React.useState<MovieListOptions>({
    searchTerm: "",
    orderBy: "releaseDate",
    asc: "false",
  });

  const { data } = useSWR(
    `/movies?searchTerm=${options.searchTerm}&orderBy=${options.orderBy}&asc=${options.asc}`
  );

  return (
    <div className="flex flex-col gap-8">
      <MovieListOptionsBar
        options={options}
        onOptionsChanged={(i) => setOptions(i)}
      />
      <div className="grid grid-cols-4 place-items-center justify-center gap-10 p-5">
        {data?.map((movie: MovieData) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
