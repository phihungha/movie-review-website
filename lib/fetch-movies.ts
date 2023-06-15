import "server-only";
import { apiUrl } from "./api-url";

export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  releaseDate: string;
  criticScore: number;
  regularScore: number;
}

export async function fetchMovies(): Promise<Movie[]> {
  const resp = await fetch(apiUrl("/movies"));
  return await resp.json();
}
