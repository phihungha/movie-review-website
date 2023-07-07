"use client";

import StarIcon from "@mui/icons-material/Star";
export interface ReviewScoreIndicatorProps {
  score: number | string;
}

export function ReviewScoreIndicator({ score }: ReviewScoreIndicatorProps) {
  return (
    <div className="flex h-5 w-10 flex-row items-center gap-1">
      <StarIcon color="warning" />
      <p>{score}</p>
    </div>
  );
}
