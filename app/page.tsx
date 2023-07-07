import MovieCard, { MovieData } from "@/components/MovieCard";
import { serverFetch } from "./lib/server-fetch";
import SectionText from "./components/Texts/SectionText";

export default async function Home() {
  const trendingMovies: MovieData[] = await serverFetch("/trendingMovies");
  const recentMovies: MovieData[] = await serverFetch("/recentMovies");
  return (
    <div>
      <div className="flex h-96 w-full flex-col place-content-center content-center bg-[url('https://steamuserimages-a.akamaihd.net/ugc/2035104110937567043/68FD6097C778B56F885FA73C13788301B36270CC/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=#000000&letterbox=false')] bg-cover bg-no-repeat">
        <h2 className="self-center px-20 pt-0 text-5xl font-bold not-italic text-gray-900">
          Cinerate
        </h2>
        <h2 className="self-center px-20 pt-2 text-5xl font-bold not-italic text-gray-900">
          Your life in film
        </h2>
      </div>

      <div className="px-20 py-10">
        <SectionText>Popular movies</SectionText>
        <div className="mt-5 flex flex-wrap gap-16">
          {trendingMovies.map((movie: MovieData) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <SectionText>Recently released</SectionText>
        <div className="mt-5 flex flex-wrap gap-16">
          {recentMovies.map((movie: MovieData) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
