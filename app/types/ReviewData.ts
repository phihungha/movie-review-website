import { MovieData } from "@/components/MovieCard";
import { UserData } from "./UserData";

export interface ReviewData {
  id: number;
  authorId: string;
  movieId: number;
  title: string;
  content: string;
  score: number;
  postTime: string;
  thankCount: number;
  author: UserData;
  movie: MovieData;
  isThanked?: boolean;
}
