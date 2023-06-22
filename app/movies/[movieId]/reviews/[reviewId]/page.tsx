"use client";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function ReviewDetails({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <div className="flex whitespace-nowrap flex-row p-0 w-full">
        <div className="flex flex-col text-center place-items-center p-20 gap-10">
          <Image
            className="rounded"
            src="https://static.wikia.nocookie.net/john-wick8561/images/7/7c/Chapterfour.jpeg/revision/latest?cb=20230523074638"
            width={240}
            height={380}
            alt={"John Wick"}
          />
          <h2 className="text-3xl not-italic font-bold text-gray-900">
            John Wick
          </h2>
        </div>
        <div className="flex flex-col items-start w-9/12 p-20 gap-3 ">
          <div className="flex whitespace-nowrap flex-row p-0">
            <Avatar
              className="items-center text-center w-16 h-16"
              src=""
              alt="Trung"
              sx={{ width: 30, height: 30 }}
            />
            <div className="flex flex-col justify-center items-center gap-1">
              <h2 className="w-24 h-5 not-italic font-normal items-center text-center text-base leading-6 text-black-100">
                Trung
              </h2>
              <h2 className="w-12 h-4 not-italic font-normal items-center text-center text-xs leading-4 text-black-500">
                Critic
              </h2>
            </div>
          </div>
          <Divider className="w-full" />
          <TextField
            className="w-full not-italic font-bold text-base leading-6 text-gray-100"
            label="Review Title"
          />
          <TextField
            className="w-full"
            id="description"
            label="Description"
            multiline
            rows={4}
          />
          <div className="flex flex-row items-center gap-10 p-0 h-6">
            <Rating size="medium" value={4.5} />
            <button className="not-italic p-2 items-center font-normal text-xs leading-4 text-gray-500">
              <ThumbUpOffAltIcon fontSize="medium" color="primary" />
            </button>
          </div>
          <div className="flex flex-row justify-center w-full gap-10 pt-10 h-6">
            <div className="self-center">
              <Button color="error" className="px-20" variant="outlined">
                Cancel
              </Button>
            </div>
            <div className="self-center">
              <Button className="px-20" variant="outlined">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
