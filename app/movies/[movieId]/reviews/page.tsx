"use client";
import { ICrewCard } from "@/components/CrewCard";
import ReviewCard, { IReviewCard } from "@/components/ReviewCard";

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

export default function Reviews({ params }: { params: { slug: string } }) {
  return (
    <div className="grid place-items-center grid-rows-1 pb-10 pt-10 px-20 gap-10 justify-center">
      {reviews.map((review: IReviewCard) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
