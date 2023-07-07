import Link from "next/link";
import AuthNavSection from "./AuthNavSection";
import LoadingState from "../LoadingState/LoadingState";

export default function NavBar() {
  return (
    <nav className="flex gap-5 justify-end p-5">
      <Link href="/">Home</Link>
      <Link href="/movies">Movies</Link>
      <Link href="/users">Users</Link>
      <LoadingState>
        <AuthNavSection />
      </LoadingState>
    </nav>
  );
}
