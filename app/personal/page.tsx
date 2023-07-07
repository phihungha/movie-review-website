"use client";

import React from "react";
import ReviewCard from "@/components/ReviewCard";
import MovieCard, { MovieData } from "@/components/MovieCard";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { CircularProgress, Divider } from "@mui/material";
import Link from "next/link";
import useSWR from "swr";
import SectionText from "@/components/Texts/SectionText";
import { ProfileUpdateForm } from "./components/ProfileUpdateForm";
import { UserData } from "@/types/UserData";
import { ReviewData } from "@/types/ReviewData";

export default function Personal() {
  const { data } = useSWR<UserData>("/personal");

  if (!data) {
    return <CircularProgress />;
  }
  return <PersonalWithData data={data} />;
}

function PersonalWithData({ data }: { data: UserData }) {
  const userId = data?.id;

  return (
    <div className="items-center justify-center px-20 py-20">
      <div className="flex w-full items-center justify-center gap-20">
        <Avatar
          className="items-center text-center"
          src={data?.avatarUrl}
          alt={data?.name}
          sx={{ width: 200, height: 200 }}
        />
        <Divider orientation="vertical" className="w-5" flexItem />
        <ProfileUpdateForm />
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-7">
          <SectionText>Reviews</SectionText>
          {data?.reviews.map((review: ReviewData) => (
            <ReviewCard key={review.id} review={review} />
          ))}
          <Link href={`/users/${userId}/reviews`}>
            <Button>All reviews...</Button>
          </Link>
        </div>

        <div className="flex flex-col gap-7">
          <SectionText>Thanked reviews</SectionText>
          {data?.reviewThanks.map((review: ReviewData) => (
            <ReviewCard key={review.id} review={review} />
          ))}
          <Link href={`/users/${userId}/thankedReviews`}>
            <Button>All thanked reviews...</Button>
          </Link>
        </div>

        <div className="flex flex-col gap-7">
          <SectionText>Watched movies</SectionText>
          {data?.viewedMovies.map((movie: MovieData) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          <Link href={`/users/${userId}/viewedMovies`}>
            <Button>All watched movies...</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
