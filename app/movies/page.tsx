import MovieList from "./components/MovieList";

export const metadata = {
  title: "All movies",
};

export default function Movies() {
  return (
    <div>
      <MovieList />
    </div>
  );
}
