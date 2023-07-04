import Image from "next/image";
import Link from "next/link";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import CrewCard, { ICrewCard } from "@/components/CrewCard";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import useSWR from "swr";

export interface IReviewCard {
  id: number;
  authorId: string;
  movieId: number;
  title: string;
  content: string;
  score: number;
  postTime: string;
  thankCount: number;
}

const ReviewCard = ({ review }: { review: IReviewCard }) => {
  const link = "/movies/" + review.movieId + "/reviews/" + review.id;
  const { data, error } = useSWR(`/users/${review.authorId}`);
  const formatscore = review.score;
  const formatdate = new Date(review.postTime).toLocaleString([], {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  const user: ICrewCard = {
    id: data?.id,
    Name: data?.username,
    role: data?.userType,
    avatar_path: data?.avatarUrl,
  };
  return (
    <Link href={link}>
      <div className="flex flex-row nowrap p-0">
        <CrewCard user={user}></CrewCard>
        <div className="flex flex-col w-full items-start pl-3">
          <h2 className="w-full h-6 not-italic font-bold text-base nowrap leading-6 text-black-100">
            {review.title}
          </h2>
          <div className="flex flex-row items-center gap-10 p-0 h-6">
            <div className="flex flex-row items-center w-10 h-5 gap-1">
              <StarIcon color="warning" />
              <h2 className="w-12 h-4 not-italic font-normal text-xs leading-4 text-black-500">
                {formatscore}
              </h2>
            </div>
            <h2 className="not-italic font-normal text-xs leading-4 text-black-500">
              {formatdate}
            </h2>
          </div>
          <h2 className="not-italic font-normal text-xs text-black-100">
            {review.content}
          </h2>
          <button className="not-italic p-2 items-center font-normal text-xs leading-4 text-black-500">
            <ThumbUpOffAltIcon fontSize="small" color="primary" />
            {review.thankCount} thanks
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
