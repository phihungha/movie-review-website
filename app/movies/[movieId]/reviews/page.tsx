"use client";
import { ICrewCard } from "@/components/CrewCard";
import ReviewCard, { IReviewCard } from "@/components/ReviewCard";
import useSWR from "swr";

interface MovieDetailsProps {
  params: {
    movieId: string;
  };
}

export default function Reviews({ params }: MovieDetailsProps) {
  const { data, error } = useSWR(`/movies/${params.movieId}/reviews`);
  return (
    <div className="grid place-items-start grid-rows-1 pb-10 pt-10 px-20 gap-10 justify-start">
      {data?.map((review: IReviewCard) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
