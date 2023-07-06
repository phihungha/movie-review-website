"use client";
import { MovieData } from "@/components/MovieCard";
import ReviewCard, { IReviewCard } from "@/components/ReviewCard";
import Image from "next/image";
import useSWR from "swr";

interface MovieDetailsProps {
  params: {
    movieId: string;
  };
}

export default function Reviews({ params }: MovieDetailsProps) {
  const { data, error } = useSWR(`/movies/${params.movieId}/reviews`);
  const movie = GetMovie(params.movieId);
  const formatyear = new Date(movie.releaseDate).getFullYear().toString();
  function GetMovie(movieId: string): MovieData {
    const { data, error } = useSWR(`/movies/${movieId}`);
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
    <div className="flex whitespace-nowrap flex-row p-20 w-full">
      <div className="flex flex-col text-center place-items-start p-0 gap-5">
        <Image
          className="rounded"
          src={movie.posterUrl}
          width={240}
          height={380}
          alt={movie.title}
        />
        <h2 className="text-xl not-italic font-bold text-gray-900">
          {movie.title}
        </h2>
        <h2 className="text-xl not-italic font-bold text-gray-900">
          {formatyear}
        </h2>
      </div>
      <div className="grid place-items-start grid-rows-1 pb-10 pt-0 px-20 gap-10 justify-start w-4/6">
        {data?.map((review: IReviewCard) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
