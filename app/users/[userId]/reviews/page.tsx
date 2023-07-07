"use client";
import { ICrewCard } from "@/components/CrewCard";
import ReviewCard, { ReviewData } from "@/components/ReviewCard";
import useSWR from "swr";

interface UserDetailsProps {
  params: {
    userId: string;
  };
}

export default function UserReviews({ params }: UserDetailsProps) {
  const { data, error } = useSWR(`/users/${params.userId}/reviews`);
  return (
    <div className="grid grid-rows-1 place-items-start justify-start gap-10 px-20 pb-10 pt-10">
      {data?.map((review: ReviewData) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
