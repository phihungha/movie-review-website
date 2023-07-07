"use client";
import React, { useEffect, useState } from "react";
import ReviewCard, { IReviewCard } from "@/components/ReviewCard";
import MovieCard, { MovieData } from "@/components/MovieCard";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimeField } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Link from "next/link";
import useSWR from "swr";
import { axiosInstance, getAuthHeader } from "@/lib/client-api";
import SectionText from "@/components/Texts/SectionText";
import { updateFirebaseUser } from "@/lib/auth";
import PasswordField from "@/components/Inputs/PasswordField";

//export const metadata = {
//  title: "My account",
//};

async function updateProfile(
  name?: string,
  email?: string,
  username?: string,
  password?: string,
  dateOfBirth?: string
) {
  await updateFirebaseUser(email, password, name);
  await axiosInstance.patch(
    "/personal",
    {
      username,
      dateOfBirth,
    },
    { headers: await getAuthHeader() }
  );
}

export default function Personal() {
  const { data, mutate } = useSWR("/personal");
  const userId = data?.id;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  useEffect(() => {
    setName(data?.name);
    setEmail(data?.email);
    setUsername(data?.username);
  }, [data]);

  const onReset = () => {
    mutate();
  };

  const onSave = async () => {
    await updateProfile(name, email, username, password);
    mutate();
  };

  return (
    <div className="items-center justify-center px-20 py-20">
      <div className="flex w-full items-center justify-center gap-10">
        <Avatar
          className="items-center text-center"
          src={data?.avatarUrl}
          alt={name}
          sx={{ width: 200, height: 200 }}
        />

        <Divider orientation="vertical" className="w-5" flexItem />
        <div className="flex w-9/12 flex-col  items-center gap-3 px-20">
          <div className="w-full px-10">
            <TextField
              className="w-full p-0 text-base font-bold not-italic leading-6 text-gray-100"
              label="Email"
              value={email}
              onChange={(i) => setEmail(i.target.value)}
            />
          </div>

          <div className="w-full px-10 py-5">
            <TextField
              className="w-full p-0 text-base font-bold not-italic leading-6 text-gray-100"
              label="Name"
              value={name}
              onChange={(i) => setName(i.target.value)}
            />
          </div>

          <div className="w-full px-10">
            <TextField
              className="w-full p-0 text-base font-bold not-italic leading-6 text-gray-100"
              label="User Name"
              value={username}
              onChange={(i) => setUsername(i.target.value)}
            />
          </div>

          <PasswordField
            password={password}
            onPasswordChanged={(i) => setPassword(i)}
          />

          <PasswordField
            label="Re-enter password"
            helperText="Password does not match"
            password={rePassword}
            error={password !== "" && password !== rePassword}
            onPasswordChanged={(i) => setRePassword(i)}
          />

          <div className="w-full px-10">
            <p>Type: {data?.userType}</p>
          </div>
        </div>
      </div>
      <div className="flex h-6 w-full flex-row justify-end gap-10 p-20">
        <div className="self-center">
          <Button
            color="error"
            className="px-20"
            onClick={onReset}
            variant="outlined"
          >
            Reset
          </Button>
        </div>
        <div className="self-center">
          <Button className="px-20" onClick={onSave} variant="outlined">
            Save
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <SectionText>Reviews</SectionText>
          {data?.reviews.map((review: IReviewCard) => (
            <ReviewCard key={review.id} review={review} />
          ))}
          <Link href={`/users/${userId}/reviews`}>
            <Button>All reviews...</Button>
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <SectionText>Thanked reviews</SectionText>
          {data?.reviewThanks.map((review: IReviewCard) => (
            <ReviewCard key={review.id} review={review} />
          ))}
          <Link href={`/users/${userId}/thankedReviews`}>
            <Button>All thanked reviews...</Button>
          </Link>
        </div>

        <div className="flex flex-col gap-5">
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
