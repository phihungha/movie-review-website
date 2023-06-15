import LoadingSpinner from "@/components/loadingSpinner";
import { Movie, fetchMovies } from "@/lib/fetch-movies";
import Image from "next/image";
import { Suspense } from "react";

export const metadata = {
  title: "Movies",
};

async function MovieList() {
  const movies = await fetchMovies();
  return (
    <div className="flex gap-10">
      {movies.map((i: Movie) => (
        <div key={i.id}>
          <Image
            key={i.id}
            width={150}
            height={150}
            src={i.posterUrl}
            alt={`Movie poster for ${i.title}`}
          />
          <p>Title: {i.title}</p>
          <p>Release date: {i.releaseDate}</p>
          <p>Critic score: {i.criticScore}</p>
          <p>Regular score: {i.regularScore}</p>
        </div>
      ))}
    </div>
  );
}

export default async function Movies() {
  return (
    <div>
      <p>Movies</p>
      <Suspense fallback={<LoadingSpinner />}>
        <MovieList />
      </Suspense>
    </div>
  );
}
