import Image from "next/image";
import Link from "next/link";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import CrewCard, { ICrewCard } from "@/components/CrewCard";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

export interface IReviewCard {
  id: number;
  review_title: string;
  description: string;
  score: number;
  date: Date;
  like: number;
}

const ReviewCard = (
  { review }: { review: IReviewCard },
  { user }: { user: ICrewCard }
) => {
  return (
    <div className="flex flex-row p-0">
      <CrewCard user={user}></CrewCard>
      <div className="flex flex-col items-start pl-3">
        <h2 className="w-24 h-6 not-italic font-bold text-base leading-6 text-gray-100">
          {review.review_title}
        </h2>
        <div className="flex flex-row items-center gap-10 p-0 h-6">
          <div className="flex flex-row items-center w-10 h-5 gap-1">
            <StarIcon color="warning" />
            <h2 className="w-12 h-4 not-italic font-normal text-xs leading-4 text-gray-500">
              {review.score}
            </h2>
          </div>
          <h2 className="not-italic font-normal text-xs leading-4 text-gray-500">
            {review.date.toString()}
          </h2>
        </div>
        <h2 className="not-italic font-normal text-xs text-gray-100">
          {review.description}
        </h2>
        <button className="not-italic p-2 items-center font-normal text-xs leading-4 text-gray-500">
          <ThumbUpOffAltIcon fontSize="small" color="primary" />
          {review.like} likes
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
