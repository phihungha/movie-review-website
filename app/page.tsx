import MovieCard, { MovieData } from "@/components/MovieCard";
import { serverFetch } from "./lib/server-fetch";

export default async function Home() {
  const trendingMovies: MovieData[] = await serverFetch("/trendingMovies");
  const recentMovies: MovieData[] = await serverFetch("/recentMovies");
  return (
    <div>
      <div className="flex flex-col place-content-center content-center h-96 w-full bg-no-repeat bg-cover bg-[url('https://steamuserimages-a.akamaihd.net/ugc/2035104110937567043/68FD6097C778B56F885FA73C13788301B36270CC/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=#000000&letterbox=false')]">
        <h2 className="text-4xl pt-0 px-20 not-italic self-center font-bold text-gray-900">
          Cinerate
        </h2>
        <h2 className="text-4xl pt-2 px-20 not-italic self-center font-bold text-gray-900">
          Your life in film
        </h2>
      </div>
      <h2 className="text-2xl pt-10 px-20 not-italic font-bold text-gray-900">
        Popular movies
      </h2>
      <div className="flex flex-row pt-10 pb-10 px-20 gap-20 w-full overflow-auto">
        {trendingMovies.map((movie: MovieData) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <h2 className="text-2xl pt-10 px-20 pb-10 not-italic font-bold text-gray-900">
        Recently Release
      </h2>
      <div className="grid place-items-center grid-cols-5 px-20 gap-20 justify-center">
        {recentMovies.map((movie: MovieData) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
