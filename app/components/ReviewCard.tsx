import Image from "next/image";
import Link from "next/link";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import CrewCard, { ICrewCard } from "@/components/CrewCard";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import useSWR from "swr";

export interface ReviewData {
  id: number;
  authorId: string;
  movieId: number;
  title: string;
  content: string;
  score: number;
  postTime: string;
  thankCount: number;
}

const ReviewCard = ({ review }: { review: ReviewData }) => {
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
    name: data?.username,
    role: data?.userType,
    avatarUrl: data?.avatarUrl,
  };
  return (
    <Link href={link}>
      <div className="flex w-full flex-row p-0">
        <div>
          <CrewCard user={user}></CrewCard>
        </div>
        <div className="flex w-full flex-col items-start pl-3">
          <h2 className="nowrap text-black-100 h-6 w-full text-base font-bold not-italic leading-6">
            {review.title}
          </h2>
          <div className="flex h-6 flex-row items-center gap-10 p-0">
            <div className="flex h-5 w-10 flex-row items-center gap-1">
              <StarIcon color="warning" />
              <h2 className="text-black-500 h-4 w-12 text-xs font-normal not-italic leading-4">
                {formatscore}
              </h2>
            </div>
            <h2 className="text-black-500 text-xs font-normal not-italic leading-4">
              {formatdate}
            </h2>
          </div>
          <h2 className="text-black-100 whitespace-pre-line text-xs font-normal not-italic">
            {review.content}
          </h2>
          <button className="text-black-500 items-center p-2 text-xs font-normal not-italic leading-4">
            <ThumbUpOffAltIcon fontSize="small" color="primary" />
            {review.thankCount} thanks
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
