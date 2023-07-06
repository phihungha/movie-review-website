"use client";
import * as React from "react";
import ReviewCard, { IReviewCard } from "@/components/ReviewCard";
import MovieCard, { MovieData } from "@/components/MovieCard";
import dayjs, { Dayjs } from "dayjs";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { InputLabel, FormControl, Select, Divider } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimeField } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Link from "next/link";

//export const metadata = {
//  title: "My account",
//};

export default function Personal() {
  const [userType, setUserType] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rePassword, setRePassword] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );
  const handleChange = (event: SelectChangeEvent) => {
    setUserType(event.target.value);
  };
  const handleAvatar = () => {
    return;
  };

  const handleReset = () => {
    return;
  };

  const handleSave = (
    email: string,
    name: string,
    userName: string,
    dateOfBirth: Dayjs | null,
    avatar: string
  ) => {
    return;
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="items-center justify-center py-20">
        <div className="flex place-items-center flex-row px-20 w-full">
          <div className="flex flex-col text-center place-items-center px-20 gap-5">
            <Avatar
              className="items-center text-center w-16 h-16"
              src=""
              alt="Trung"
              sx={{ width: 240, height: 380 }}
            />
            <div className="self-center w-full">
              <Button
                className="px-2"
                onClick={handleAvatar}
                variant="outlined"
              >
                Choose Avatar
              </Button>
            </div>
          </div>
          <Divider orientation="vertical" className="w-5" flexItem />
          <div className="flex flex-col items-center  w-9/12 px-20 gap-3">
            <div className="px-10 w-full">
              <TextField
                className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
                label="Email"
                value={email}
              />
            </div>

            <div className="px-10 py-5 w-full">
              <TextField
                className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
                label="Name"
                value={name}
              />
            </div>

            <div className="px-10 w-full">
              <TextField
                className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
                label="User Name"
                value={userName}
              />
            </div>

            <div className="px-10 py-5 w-full">
              <DateTimeField
                className="w-full"
                label="Birthday"
                value={dateOfBirth}
                onChange={(newValue) => setDateOfBirth(newValue)}
                format="L"
              />
            </div>

            <div className="px-10 w-full">
              <FormControl
                className="w-full"
                sx={{ minWidth: 120 }}
                size="small"
              >
                <InputLabel sx={{ my: 1 }} id="demo-select-small-label">
                  User Type
                </InputLabel>
                <Select
                  className="h-14"
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={userType}
                  label="User Type"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Critic">Critic</MenuItem>
                  <MenuItem value="Regular">Regular</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end p-20 w-full gap-10 h-6">
          <div className="self-center">
            <Button
              color="error"
              className="px-20"
              onClick={handleReset}
              variant="outlined"
            >
              Reset
            </Button>
          </div>
          <div className="self-center">
            <Button
              className="px-20"
              onClick={() =>
                handleSave(email, name, userName, dateOfBirth, avatar)
              }
              variant="outlined"
            >
              Save
            </Button>
          </div>
        </div>

        <h2 className="text-2xl pt-10 px-20 not-italic font-bold text-gray-900">
          Reviews
        </h2>
        <Link href="/personal/reviews">
          <h2 className="text-xl pt-0 px-20 pb-20 text-center not-italic font-bold text-gray-900">
            All Reviews
          </h2>
        </Link>

        <h2 className="text-2xl pt-10 px-20 not-italic font-bold text-gray-900">
          Thanked Reviews
        </h2>

        <Link href="/personal/thankedReviews">
          <h2 className="text-xl pt-0 px-20 pb-20 text-center not-italic font-bold text-gray-900">
            All Reviews
          </h2>
        </Link>

        <h2 className="text-2xl pt-10 px-20 not-italic font-bold text-gray-900">
          Viewed Movies
        </h2>

        <Link href="/personal/viewedMovies">
          <h2 className="text-xl pt-0 px-20 pb-20 text-center not-italic font-bold text-gray-900">
            All Movies
          </h2>
        </Link>
      </div>
    </LocalizationProvider>
  );
}
