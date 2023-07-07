"use client";
import Avatar from "@mui/material/Avatar";
import ReviewCard from "@/components/ReviewCard";
import MovieCard, { MovieData } from "@/components/MovieCard";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import useSWR from "swr";
import { ReviewData } from "@/types/ReviewData";
import SectionText from "@/components/Texts/SectionText";

interface UserDetailsProps {
  params: {
    userId: string;
  };
}

export default function UserDetails({ params }: UserDetailsProps) {
  const { data } = useSWR(`/users/${params.userId}`);
  const userId = params.userId;

  return (
    <div className="items-center justify-center p-20">
      <div className="flex w-full flex-row place-items-center px-20 py-20">
        <div className="flex flex-col place-items-center gap-5 px-20 text-center">
          <Avatar
            className="h-16 w-16 items-center text-center"
            src={data?.avatarUrl}
            alt={data?.name}
            sx={{ width: 240, height: 380 }}
          />
          <h2 className="text-3xl font-bold not-italic text-gray-900">
            {data?.username}
          </h2>
          <h2 className="text-xl not-italic text-gray-900">{data?.userType}</h2>
        </div>
        <Divider orientation="vertical" className="w-5" flexItem />
        <div className="flex w-9/12 flex-col items-center gap-3 px-20">
          <div className="w-full px-10 py-5">
            <TextField
              className="w-full p-0 text-base font-bold not-italic leading-6 text-gray-100"
              label="Email"
              defaultValue={data?.email}
              variant="filled"
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{ shrink: true }}
            />
          </div>

          <div className="w-full px-10 py-5">
            <TextField
              className="w-full p-0 text-base font-bold not-italic leading-6 text-gray-100"
              label="Name"
              defaultValue={data?.name}
              variant="filled"
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{ shrink: true }}
            />
          </div>

          <div className="w-full px-10 py-5">
            <TextField
              className="w-full p-0 text-base font-bold not-italic leading-6 text-gray-100"
              label="Gender"
              defaultValue={data?.gender}
              variant="filled"
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{ shrink: true }}
            />
          </div>
        </div>
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
