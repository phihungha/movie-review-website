"use client";
import MovieCard from "@/components/MovieCard";

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
  {
    id: 7,
    title: "John Wick",
    year: 2014,
    poster_path:
      "https://static.wikia.nocookie.net/john-wick8561/images/7/7c/Chapterfour.jpeg/revision/latest?cb=20230523074638",
    critic_score: 7,
    regular_score: 8,
  },
  {
    id: 8,
    title: "John Wick",
    year: 2014,
    poster_path:
      "https://static.wikia.nocookie.net/john-wick8561/images/7/7c/Chapterfour.jpeg/revision/latest?cb=20230523074638",
    critic_score: 7,
    regular_score: 8,
  },
  {
    id: 9,
    title: "John Wick",
    year: 2014,
    poster_path:
      "https://static.wikia.nocookie.net/john-wick8561/images/7/7c/Chapterfour.jpeg/revision/latest?cb=20230523074638",
    critic_score: 7,
    regular_score: 8,
  },
];

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl pt-0 px-20 not-italic font-bold text-gray-900">
        Popular movies
      </h2>
      <div className="flex flex-row pt-10 pb-10 px-20 gap-20 w-full overflow-auto">
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <h2 className="text-2xl pt-10 px-20 pb-10 not-italic font-bold text-gray-900">
        Recently Release
      </h2>
      <div className="grid place-items-center grid-cols-4 p-5 gap-10 justify-center">
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
