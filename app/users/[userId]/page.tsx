"use client";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function UserDetails() {
  return (
    <div className="items-center justify-center py-20">
      <div className="flex place-items-center flex-row px-20 w-full">
        <div className="flex flex-col text-center place-items-center px-20 gap-5">
          <Avatar
            className="items-center text-center w-16 h-16"
            src=""
            alt="Trung"
            sx={{ width: 240, height: 380 }}
          />
          <h2 className="text-3xl not-italic font-bold text-gray-900">Name</h2>
          <h2 className="text-xl not-italic text-gray-900">Critic</h2>
        </div>
        <Divider orientation="vertical" className="w-5" flexItem />
        <div className="flex flex-col items-end  w-9/12 px-20 gap-3">
          <div className="flex flex-row text-center space-x-28 place-items-center gap-20">
            <div className="px-10">
              <TextField
                className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
                label="Email"
                defaultValue="20520333@gm.uit.edu.vn"
                variant="filled"
              />
            </div>

            <div className="px-10 py-5">
              <TextField
                className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
                label="Name"
                defaultValue="Trung"
                variant="filled"
              />
            </div>
          </div>
          <div className="flex flex-row text-center space-x-28 place-items-center gap-20">
            <div className="px-10">
              <TextField
                className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
                label="Birthday"
                defaultValue="26-10-2002"
                variant="filled"
              />
            </div>

            <div className="px-10 py-5">
              <TextField
                className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
                label="Favorite Genre"
                defaultValue="Action"
                variant="filled"
              />
            </div>
          </div>
        </div>
        <Divider orientation="vertical" flexItem />
      </div>
      <div className="flex flex-row justify-center w-full gap-10 p-20 h-6">
        <Link href="/users/1/reviews">
          <div className="self-center">
            <Button className="px-20" variant="outlined">
              All Reviews
            </Button>
          </div>
        </Link>
        <Link href="/users/1/thankedReviews">
          <div className="self-center">
            <Button className="px-20" variant="outlined">
              Thanked Reviews
            </Button>
          </div>
        </Link>
        <Link href="/users/1/viewedMovies">
          <div className="self-center">
            <Button className="px-20" variant="outlined">
              Viewed Movies
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}
