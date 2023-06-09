import { MovieData } from "@/components/MovieCard";
import { UserType } from "./UserType";
import { ReviewData } from "./ReviewData";

export interface UserData {
  id: string;
  name: string;
  username: string;
  avatarUrl: string;
  email: string;
  userType: UserType;
  viewedMovies: MovieData[];
  reviews: ReviewData[];
  reviewThanks: ReviewData[];
}
