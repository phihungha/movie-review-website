"use client";
import ReviewCard from "@/components/ReviewCard";
import { ReviewData } from "@/types/ReviewData";
import useSWR from "swr";

interface UserDetailsProps {
  params: {
    userId: string;
  };
}

export default function UserThankedReviews({ params }: UserDetailsProps) {
  const { data } = useSWR(`/users/${params.userId}/thanked-reviews`);
  return (
    <div className="grid grid-rows-1 place-items-start justify-start gap-10 px-20 pb-10 pt-10">
      {data?.map((review: ReviewData) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
