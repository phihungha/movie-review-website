"use client";
import Avatar from "@mui/material/Avatar";
import ReviewCard, { IReviewCard } from "@/components/ReviewCard";
import MovieCard, { MovieData } from "@/components/MovieCard";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import useSWR from "swr";

interface UserDetailsProps {
  params: {
    userId: string;
  };
}

export default function UserDetails({ params }: UserDetailsProps) {
  const { data, error } = useSWR(`/users/${params.userId}`);
  const formatdate = new Date(data?.dateOfBirth).toLocaleDateString();
  const linkAll = "/users/" + params.userId + "/reviews";
  const linkThanked = "/users/" + params.userId + "/thankedReviews";
  const linkViewed = "/users/" + params.userId + "/viewedMovies";
  return (
    <div className="items-center justify-center py-20">
      <div className="flex place-items-center flex-row py-20 px-20 w-full">
        <div className="flex flex-col text-center place-items-center px-20 gap-5">
          <Avatar
            className="items-center text-center w-16 h-16"
            src={data?.avatarUrl}
            alt={data?.name}
            sx={{ width: 240, height: 380 }}
          />
          <h2 className="text-3xl not-italic font-bold text-gray-900">
            {data?.username}
          </h2>
          <h2 className="text-xl not-italic text-gray-900">{data?.userType}</h2>
        </div>
        <Divider orientation="vertical" className="w-5" flexItem />
        <div className="flex flex-col items-center  w-9/12 px-20 gap-3">
          <div className="px-10 w-full">
            <TextField
              className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
              label="Email"
              defaultValue={data?.email}
              variant="filled"
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{ shrink: true }}
            />
          </div>

          <div className="px-10 py-5 w-full">
            <TextField
              className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
              label="Name"
              defaultValue={data?.name}
              variant="filled"
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{ shrink: true }}
            />
          </div>

          <div className="px-10 w-full">
            <TextField
              className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
              label="Birthday"
              defaultValue={formatdate}
              variant="filled"
              InputProps={{
                readOnly: true,
              }}
              InputLabelProps={{ shrink: true }}
            />
          </div>

          <div className="px-10 py-5 w-full">
            <TextField
              className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
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

      <h2 className="text-2xl pt-10 px-20 not-italic font-bold text-gray-900">
        Reviews
      </h2>
      <div className="grid place-items-start grid-rows-1 pb-10 pt-10 gap-10 px-20 justify-start">
        {data?.reviews.map((review: IReviewCard) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <Link href={linkAll}>
        <h2 className="text-xl pt-0 px-20 pb-20 text-center not-italic font-bold text-gray-900">
          All Reviews
        </h2>
      </Link>

      <h2 className="text-2xl pt-10 px-20 not-italic font-bold text-gray-900">
        Thanked Reviews
      </h2>
      <div className="grid place-items-start grid-rows-1 pb-10 pt-10 gap-10 px-20 justify-start">
        {data?.reviewThanks.map((review: IReviewCard) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <Link href={linkThanked}>
        <h2 className="text-xl pt-0 px-20 pb-20 text-center not-italic font-bold text-gray-900">
          All Reviews
        </h2>
      </Link>

      <h2 className="text-2xl pt-10 px-20 not-italic font-bold text-gray-900">
        Viewed Movies
      </h2>
      <div className="grid place-items-start grid-rows-1 pb-10 pt-10 gap-10 px-20 justify-start">
        {data?.viewedMovies.map((movie: MovieData) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Link href={linkViewed}>
        <h2 className="text-xl pt-0 px-20 pb-20 text-center not-italic font-bold text-gray-900">
          All Movies
        </h2>
      </Link>
    </div>
  );
}
