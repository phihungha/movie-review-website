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
    <div className="flex flex-col gap-8 px-24 py-14">
      <MovieListOptionsBar
        options={options}
        onOptionsChanged={(i) => setOptions(i)}
      />
      <div className="flex flex-wrap gap-16 p-5">
        {data?.map((movie: MovieData) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
