"use client";
import Avatar from "@mui/material/Avatar";
import ReviewCard, { ReviewData } from "@/components/ReviewCard";
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
        <div className="flex w-9/12 flex-col  items-center gap-3 px-20">
          <div className="w-full px-10">
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

          <div className="w-full px-10">
            <TextField
              className="w-full p-0 text-base font-bold not-italic leading-6 text-gray-100"
              label="Birthday"
              defaultValue={formatdate}
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

      <h2 className="px-20 pt-10 text-2xl font-bold not-italic text-gray-900">
        Reviews
      </h2>
      <div className="grid grid-rows-1 place-items-start justify-start gap-10 px-20 pb-10 pt-10">
        {data?.reviews.map((review: ReviewData) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <Link href={linkAll}>
        <h2 className="px-20 pb-20 pt-0 text-center text-xl font-bold not-italic text-gray-900">
          All Reviews
        </h2>
      </Link>

      <h2 className="px-20 pt-10 text-2xl font-bold not-italic text-gray-900">
        Thanked Reviews
      </h2>
      <div className="grid grid-rows-1 place-items-start justify-start gap-10 px-20 pb-10 pt-10">
        {data?.reviewThanks.map((review: ReviewData) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <Link href={linkThanked}>
        <h2 className="px-20 pb-20 pt-0 text-center text-xl font-bold not-italic text-gray-900">
          All Reviews
        </h2>
      </Link>

      <h2 className="px-20 pt-10 text-2xl font-bold not-italic text-gray-900">
        Viewed Movies
      </h2>
      <div className="grid grid-rows-1 place-items-start justify-start gap-10 px-20 pb-10 pt-10">
        {data?.viewedMovies.map((movie: MovieData) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Link href={linkViewed}>
        <h2 className="px-20 pb-20 pt-0 text-center text-xl font-bold not-italic text-gray-900">
          All Movies
        </h2>
      </Link>
    </div>
  );
}
