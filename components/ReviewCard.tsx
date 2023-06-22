import Image from "next/image";
import Link from "next/link";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import CrewCard, { ICrewCard } from "@/components/CrewCard";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

export interface IReviewCard {
  id: number;
  user: ICrewCard;
  review_title: string;
  description: string;
  score: number;
  date: string;
  like: number;
}

const ReviewCard = ({ review }: { review: IReviewCard }) => {
  return (
    <Link href="/movies/2/reviews/2">
      <div className="flex flex-row p-0">
        <CrewCard user={review.user}></CrewCard>
        <div className="flex flex-col items-start pl-3">
          <h2 className="w-24 h-6 not-italic font-bold text-base leading-6 text-black-100">
            {review.review_title}
          </h2>
          <div className="flex flex-row items-center gap-10 p-0 h-6">
            <div className="flex flex-row items-center w-10 h-5 gap-1">
              <StarIcon color="warning" />
              <h2 className="w-12 h-4 not-italic font-normal text-xs leading-4 text-black-500">
                {review.score}
              </h2>
            </div>
            <h2 className="not-italic font-normal text-xs leading-4 text-black-500">
              {review.date}
            </h2>
          </div>
          <h2 className="not-italic font-normal text-xs text-black-100">
            {review.description}
          </h2>
          <button className="not-italic p-2 items-center font-normal text-xs leading-4 text-black-500">
            <ThumbUpOffAltIcon fontSize="small" color="primary" />
            {review.like} likes
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
