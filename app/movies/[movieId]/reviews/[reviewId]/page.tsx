"use client";

import Image from "next/image";
import { MovieData } from "@/components/MovieCard";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useSWR from "swr";
import { axiosInstance, getAuthHeader } from "@/lib/client-api";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

async function editReview(
  reviewId: string,
  title: string,
  content: string,
  score: number
) {
  await axiosInstance.patch(
    `/reviews/${reviewId}`,
    {
      title,
      content,
      score,
    },
    { headers: await getAuthHeader() }
  );
}

async function deleteReview(reviewId: string) {
  await axiosInstance.delete(`/reviews/${reviewId}`, {
    headers: await getAuthHeader(),
  });
}

interface ReviewDetailsProps {
  params: {
    reviewId: string;
    movieId: string;
  };
}

export default function ReviewDetails({ params }: ReviewDetailsProps) {
  const reviewId = params.reviewId;

  const { data, mutate } = useSWR(`/reviews/${reviewId}`);
  const user = data?.author;
  const movie = data?.movie as MovieData | undefined;

  const router = useRouter();

  const [reviewScore, setReviewScore] = useState<number | null>(null);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewContent, setReviewContent] = useState("");

  useEffect(() => {
    setReviewTitle(data?.title);
    setReviewContent(data?.content);
    setReviewScore(data?.score);
  }, [data]);

  async function onReviewEdit() {
    if (!reviewScore) {
      return;
    }
    await editReview(reviewId, reviewTitle, reviewContent, reviewScore);
    mutate();
  }

  async function onReviewDelete() {
    await deleteReview(reviewId);
    router.replace(`/movies/${movie?.id}`);
  }

  return (
    <div>
      <div className="flex w-full flex-row whitespace-nowrap p-0">
        <div className="flex flex-col place-items-center gap-10 p-20 text-center">
          <Image
            className="rounded"
            src={movie?.posterUrl ?? ""}
            width={240}
            height={380}
            alt={movie?.title ?? ""}
          />
          <h2 className="text-3xl font-bold not-italic text-gray-900">
            {movie?.title}
          </h2>
        </div>

        <div className="flex w-9/12 flex-col items-start gap-3 p-20">
          <div className="flex flex-row whitespace-nowrap p-0">
            <Avatar
              className="h-16 w-16 items-center text-center"
              src={user?.avatarUrl}
              alt={user?.name}
              sx={{ width: 60, height: 60 }}
            />
            <div className="flex flex-col items-center justify-center gap-1">
              <h2 className="text-black-100 h-5 w-24 items-center text-center text-base font-normal not-italic leading-6">
                {user?.name}
              </h2>
              <h2 className="text-black-500 h-4 w-12 items-center text-center text-xs font-normal not-italic leading-4">
                {user?.userType}
              </h2>
            </div>
          </div>

          <Divider className="w-full" />
          <TextField
            className="w-full text-base font-bold not-italic leading-6 text-gray-100"
            value={reviewTitle}
            onChange={(i) => setReviewTitle(i.target.value)}
          />
          <TextField
            className="w-full"
            id="description"
            value={reviewContent}
            onChange={(i) => setReviewContent(i.target.value)}
            multiline
            rows={4}
          />
          <div className="flex h-6 flex-row items-center gap-10 p-0">
            <Rating
              size="medium"
              value={reviewScore}
              onChange={(_, r) => setReviewScore(r)}
              max={10}
            />
          </div>

          <div className="flex h-6 w-full flex-row justify-center gap-10 pt-10">
            <div className="self-center">
              <Button
                color="error"
                className="px-20"
                variant="outlined"
                onClick={() => onReviewDelete()}
              >
                Delete
              </Button>
            </div>
            <div className="self-center">
              <Button
                className="px-20"
                variant="outlined"
                onClick={() => onReviewEdit()}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
