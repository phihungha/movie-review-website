import Link from "next/link";
import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { ReviewData } from "@/types/ReviewData";
import { dateToFullFormat } from "@/utils/time-conversion";
import VerticalUserCard from "./Card/VerticalUserCard";
import { ReviewScoreIndicator } from "./Display/ReviewScoreIndicator";
import { Button } from "@mui/material";
import useSWR from "swr";
import { getAuthHeader } from "@/lib/app-api";
import { axiosInstance } from "@/lib/client-api";

async function thankReview(reviewId: number) {
  const resp = await axiosInstance.put(
    `/reviews/${reviewId}/thanks`,
    {},
    { headers: await getAuthHeader() }
  );
  return resp.data;
}

const ReviewCard = ({ review }: { review: ReviewData }) => {
  const url = `/movies/${review.movieId}/reviews/${review.id}`;

  const { data, mutate } = useSWR<ReviewData>(`/reviews/${review.id}`);

  const onThank = async () => {
    await thankReview(review.id);
    mutate();
  };

  return (
    <div className="flex w-full items-center gap-7 rounded-xl border border-black p-5 shadow-lg">
      <div className="w-32">
        <VerticalUserCard user={review?.author}></VerticalUserCard>
      </div>

      <div className="flex flex-col items-start gap-2">
        <Link href={url}>
          <h2 className="text-lg font-bold">{review.title}</h2>
        </Link>

        <div className="flex  items-center gap-10">
          <ReviewScoreIndicator score={review.score} />
          <p>{dateToFullFormat(new Date(review.postTime))}</p>
        </div>

        <p>{review.content}</p>

        <Button
          onClick={onThank}
          className={data?.isThanked ? "bg-blue-500" : ""}
          variant={data?.isThanked ? "contained" : "outlined"}
          startIcon={<ThumbUpOffAltIcon fontSize="small" />}
        >
          {data?.thankCount} {data && data.thankCount > 1 ? "thanks" : "thank"}
        </Button>
      </div>
    </div>
  );
};

export default ReviewCard;
