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
import CircularProgress from "@mui/material/CircularProgress";
import { SuccessSnackbar } from "@/components/Snackbars/SuccessSnackBar";

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

  const [editIsLoading, setEditIsLoading] = React.useState(false);
  const [displayEditSuccess, setDisplayEditSuccess] = React.useState(false);

  async function onReviewEdit() {
    if (!reviewScore) {
      return;
    }
    setEditIsLoading(true);
    try {
      await editReview(reviewId, reviewTitle, reviewContent, reviewScore);
      mutate();
      setDisplayEditSuccess(true);
    } catch (err) {
      throw err;
    } finally {
      setEditIsLoading(false);
    }
  }

  const [deleteIsLoading, setDeleteIsLoading] = React.useState(false);
  const [displayDeleteSuccess, setDisplayDeleteSuccess] = React.useState(false);

  async function onReviewDelete() {
    setDeleteIsLoading(true);
    try {
      await deleteReview(reviewId);
      setDisplayDeleteSuccess(true);
      router.replace(`/movies/${movie?.id}`);
    } catch (err) {
      throw err;
    } finally {
      setDeleteIsLoading(false);
    }
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
          <div className="flex flex-row gap-5 whitespace-nowrap p-0">
            <Avatar
              className="h-16 w-16 items-center text-center"
              src={user?.avatarUrl}
              alt={user?.name}
              sx={{ width: 60, height: 60 }}
            />
            <div className="flex flex-col justify-center gap-1">
              <p className="font-bold">{user?.name}</p>
              <p className="text-sm">{user?.userType}</p>
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

          {data.isMine && (
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

              {editIsLoading ? (
                <CircularProgress />
              ) : (
                <div className="self-center">
                  <Button
                    className="px-20"
                    variant="outlined"
                    onClick={() => onReviewEdit()}
                  >
                    Save
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {displayEditSuccess && (
        <SuccessSnackbar
          message="Review edited!"
          onClose={() => setDisplayEditSuccess(false)}
          display={displayEditSuccess}
        />
      )}

      {displayDeleteSuccess && (
        <SuccessSnackbar
          message="Review deleted!"
          onClose={() => setDisplayDeleteSuccess(false)}
          display={displayDeleteSuccess}
        />
      )}
    </div>
  );
}
