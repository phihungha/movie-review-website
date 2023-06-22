"use client";
import CrewCard, { ICrewCard } from "@/components/CrewCard";
import ReviewCard, { IReviewCard } from "@/components/ReviewCard";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Button from "@mui/material/Button";
import Link from "next/link";

const crews: ICrewCard[] = [
  {
    id: 1,
    Name: "Trung",
    role: "Director",
    avatar_path: "",
  },
  {
    id: 2,
    Name: "Trung",
    role: "Director",
    avatar_path: "",
  },
  {
    id: 3,
    Name: "Trung",
    role: "Director",
    avatar_path: "",
  },
  {
    id: 4,
    Name: "Trung",
    role: "Director",
    avatar_path: "",
  },
  {
    id: 5,
    Name: "Trung",
    role: "Director",
    avatar_path: "",
  },
];

const sampleuser: ICrewCard = {
  id: 10,
  Name: "Trung",
  role: "Critic",
  avatar_path: "",
};

const reviews: IReviewCard[] = [
  {
    id: 1,
    user: sampleuser,
    review_title: "Review Title",
    description:
      "At last, the chief of police assigns “crime expert” Dizdar Koşu, who has recently come back from the US, to the team.Overwhelmed with panic, pressure and disdain, Emin and his friends try to solve the strangest series of murders with the most unusual methods.This fast race against time immediately turns into a tragicomedy.",
    score: 4.5,
    date: "2023-03-25",
    like: 1000,
  },
  {
    id: 2,
    user: sampleuser,
    review_title: "Review Title",
    description:
      "At last, the chief of police assigns “crime expert” Dizdar Koşu, who has recently come back from the US, to the team.Overwhelmed with panic, pressure and disdain, Emin and his friends try to solve the strangest series of murders with the most unusual methods.This fast race against time immediately turns into a tragicomedy.",
    score: 4.5,
    date: "2023-03-25",
    like: 1000,
  },
  {
    id: 3,
    user: sampleuser,
    review_title: "Review Title",
    description:
      "At last, the chief of police assigns “crime expert” Dizdar Koşu, who has recently come back from the US, to the team.Overwhelmed with panic, pressure and disdain, Emin and his friends try to solve the strangest series of murders with the most unusual methods.This fast race against time immediately turns into a tragicomedy.",
    score: 4.5,
    date: "2023-03-25",
    like: 1000,
  },
  {
    id: 4,
    user: sampleuser,
    review_title: "Review Title",
    description:
      "At last, the chief of police assigns “crime expert” Dizdar Koşu, who has recently come back from the US, to the team.Overwhelmed with panic, pressure and disdain, Emin and his friends try to solve the strangest series of murders with the most unusual methods.This fast race against time immediately turns into a tragicomedy.",
    score: 4.5,
    date: "2023-03-25",
    like: 1000,
  },
];

export default function MovieDetails({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  return (
    <div className="place-items-center content-center">
      <div className="flex whitespace-nowrap flex-row p-0 w-full">
        <div className="flex flex-col place-items-center p-20 gap-10">
          <Image
            className="rounded"
            src="https://static.wikia.nocookie.net/john-wick8561/images/7/7c/Chapterfour.jpeg/revision/latest?cb=20230523074638"
            width={240}
            height={380}
            alt={"John Wick"}
          />
          <Rating size="large" name="read-only" value={4.5} readOnly />
        </div>
        <div className="flex flex-col items-start w-9/12 p-20 gap-3 ">
          <h2 className="text-5xl not-italic font-bold text-gray-900">
            John Wick
          </h2>
          <div className="flex flex-row items-center gap-1">
            <StarIcon sx={{ fontSize: 30 }} color="warning" />
            <h2 className="text-xl not-italic font-normal text-xs leading-4 text-black-500">
              4.5
            </h2>
          </div>
          <div>
            <h2 className="text-lg not-italic font-normal text-xs leading-4 text-black-100 whitespace-pre-line">
              Istanbul Police DepartmentIstanbul Police DepartmentIstanbul
              Police DepartmentIstanbul Police DepartmentIstanbul Police
              DepartmentIstanbul Police DepartmentIstanbul Police
              DepartmentIstanbul Police DepartmentIstanbul Police
              DepartmentIstanbul Police DepartmentIstanbul Police
              DepartmentIstanbul Police DepartmentIstanbul Police
              DepartmentIstanbul Police Department homicide detectives encounter
              a murder nothing like they’ve seen before.Commissioners Emin,
              Salih, Asuman and deputy Alaattin begin investigating.But strange
              murders keep happening. They don’t have any evidence or any clues.
              Day by day, tempers flare and the police chiefs grow annoyed.As
              the murders keep piling up, the public’s interest rises. The
              pressure on Emin and his colleagues get intense. At last, the
              chief of police assigns “crime expert” Dizdar Koşu, who has
              recently come back from the US, to the team.Overwhelmed with
              panic, pressure and disdain, Emin and his friends try to solve the
              strangest series of murders with the most unusual methods.This
              fast race against time immediately turns into a tragicomedy.
            </h2>
          </div>
          <Divider className="w-full" />
          <div className="flex flex-row p-0 gap-4 h-40 w-full overflow-auto">
            {crews.map((crew: ICrewCard) => (
              <CrewCard key={crew.id} user={crew} />
            ))}
          </div>
        </div>
      </div>
      <h2 className="text-2xl pt-0 px-20 not-italic font-bold text-gray-900">
        Your Review
      </h2>
      <div className="flex flex-row w-full place-items-center h-100 pt-10 px-20">
        <Avatar
          className="items-center text-center w-16 h-16"
          src=""
          alt={"Trung"}
          sx={{ width: 30, height: 30 }}
        />
        <div className="flex flex-col items-start gap-5 bg-blue w-full pl-3">
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
        </div>
      </div>
      <div className="px-20 pt-10 items-end text-end">
        <Button className="px-20" variant="outlined">
          Submit
        </Button>
      </div>
      <h2 className="text-2xl pt-20 px-20 not-italic font-bold text-gray-900">
        Reviews
      </h2>

      <div className="grid place-items-center grid-rows-1 pb-10 pt-10 px-20 gap-10 justify-center">
        {reviews.map((review: IReviewCard) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      <Link href="/movies/2/reviews">
        <h2 className="text-xl pt-0 px-20 pb-20 text-center not-italic font-bold text-gray-900">
          All Reviews
        </h2>
      </Link>
    </div>
  );
}
