"use client";
import { ICrewCard } from "@/components/CrewCard";
import ReviewCard, { IReviewCard } from "@/components/ReviewCard";
import useSWR from "swr";

interface UserDetailsProps {
  params: {
    userId: string;
  };
}

export default function UserReviews({ params }: UserDetailsProps) {
  const { data, error } = useSWR(`/users/${params.userId}/reviews`);
  return (
    <div className="grid place-items-start grid-rows-1 pb-10 pt-10 px-20 gap-10 justify-start">
      {data?.map((review: IReviewCard) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
