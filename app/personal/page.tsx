"use client";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";

//export const metadata = {
//  title: "My account",
//};

export default function Personal() {
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
              />
            </div>

            <div className="px-10 py-5">
              <TextField
                className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
                label="Name"
              />
            </div>
          </div>
          <div className="flex flex-row text-center space-x-28 place-items-center gap-20">
            <div className="px-10">
              <TextField
                className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
                label="Birthday"
              />
            </div>

            <div className="px-10 py-5">
              <TextField
                className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
                label="Favorite Genre"
              />
            </div>
          </div>
        </div>
        <Divider orientation="vertical" flexItem />
      </div>
      <div className="flex flex-row justify-end p-20 w-full gap-10 h-6">
        <div className="self-center">
          <Button color="error" className="px-20" variant="outlined">
            Reset
          </Button>
        </div>
        <div className="self-center">
          <Button className="px-20" variant="outlined">
            Submit
          </Button>
        </div>
      </div>
      <div className="flex flex-row justify-center w-full gap-10 p-20 h-6">
        <Link href="/personal/reviews">
          <div className="self-center">
            <Button className="px-20" variant="outlined">
              All Reviews
            </Button>
          </div>
        </Link>
        <Link href="/personal/thankedReviews">
          <div className="self-center">
            <Button className="px-20" variant="outlined">
              Thanked Reviews
            </Button>
          </div>
        </Link>
        <Link href="/personal/viewedMovies">
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
