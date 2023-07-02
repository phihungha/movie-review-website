"use client";
import MovieCard, { MovieData } from "@/components/MovieCard";

export default function Home() {
  const movies: MovieData[] = [];
  return (
    <div>
      <h2 className="text-2xl pt-0 px-20 not-italic font-bold text-gray-900">
        Popular movies
      </h2>
      <div className="flex flex-row pt-10 pb-10 px-20 gap-20 w-full overflow-auto">
        {movies.map((movie: MovieData) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <h2 className="text-2xl pt-10 px-20 pb-10 not-italic font-bold text-gray-900">
        Recently Release
      </h2>
      <div className="grid place-items-center grid-cols-4 p-5 gap-10 justify-center">
        {movies.map((movie: MovieData) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
