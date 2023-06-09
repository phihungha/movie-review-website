"use client";
import { MovieData } from "@/components/MovieCard";
import ReviewCard from "@/components/ReviewCard";
import { ReviewData } from "@/types/ReviewData";
import Image from "next/image";
import useSWR from "swr";

interface MovieDetailsProps {
  params: {
    movieId: string;
  };
}

export default function Reviews({ params }: MovieDetailsProps) {
  const { data } = useSWR(`/movies/${params.movieId}/reviews`);

  const movie = GetMovie(params.movieId);
  const formatyear = new Date(movie.releaseDate).getFullYear().toString();
  function GetMovie(movieId: string): MovieData {
    const { data } = useSWR(`/movies/${movieId}`);
    const movie: MovieData = {
      id: data?.id,
      title: data?.title,
      releaseDate: data?.releaseDate,
      posterUrl: data?.posterUrl,
      criticScore: data?.criticScore,
      regularScore: data?.regularScore,
    };
    return movie;
  }

  return (
    <div className="flex w-full flex-row p-20">
      <div className="flex flex-col gap-5 p-0 text-center">
        <Image
          className="rounded"
          src={movie.posterUrl}
          width={240}
          height={380}
          alt={movie.title}
        />
        <h2 className="text-xl font-bold">{movie.title}</h2>
        <h2 className="text-xl font-bold ">{formatyear}</h2>
      </div>
      <div className="grid grid-rows-1 place-items-start justify-start gap-10 px-20 pb-10 pt-0">
        {data?.map((review: ReviewData) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
