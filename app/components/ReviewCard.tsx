import Link from "next/link";
import React, { useEffect, useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { ReviewData } from "@/types/ReviewData";
import { dateToFullFormat } from "@/utils/time-conversion";
import VerticalUserCard from "./Card/VerticalUserCard";
import { ReviewScoreIndicator } from "./Display/ReviewScoreIndicator";
import { Button } from "@mui/material";
import useSWRMutation from "swr/mutation";
import { axiosInstance, getAuthHeader } from "@/lib/client-api";

async function thankReview(url: string) {
  const resp = await axiosInstance.put(
    url,
    {},
    { headers: await getAuthHeader() }
  );
  return resp.data;
}

const ReviewCard = ({ review }: { review: ReviewData }) => {
  const url = `/movies/${review.movieId}/reviews/${review.id}`;

  const { data, trigger } = useSWRMutation<ReviewData>(
    `/reviews/${review.id}/thanks`,
    thankReview
  );

  const [isThanked, setIsThanked] = useState(review.isThanked);
  const [thankCount, setThankCount] = useState(review.thankCount);
  useEffect(() => {
    if (data) {
      setIsThanked(data?.isThanked);
      setThankCount(data?.thankCount ?? 0);
    }
  }, [data]);

  const onThank = async () => {
    await trigger();
  };

  return (
    <div className="flex w-full items-center gap-7 rounded-xl border border-black p-5 shadow-lg">
      <div className="w-32">
        <VerticalUserCard user={review.author}></VerticalUserCard>
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
          className={isThanked ? "bg-blue-500" : ""}
          variant={isThanked ? "contained" : "outlined"}
          startIcon={<ThumbUpOffAltIcon fontSize="small" />}
        >
          {thankCount} {thankCount > 0 ? "thanks" : "thank"}
        </Button>
      </div>
    </div>
  );
};

export default ReviewCard;
