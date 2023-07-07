import Link from "next/link";
import AuthNavSection from "./AuthNavSection";
import LoadingState from "../LoadingState/LoadingState";
import NavBarText from "../Texts/NavBarText";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-end gap-5 bg-zinc-800 p-4">
      <NavBarText>
        <Link href="/">Home</Link>
      </NavBarText>
      <NavBarText>
        <Link href="/movies">Movies</Link>
      </NavBarText>
      <NavBarText>
        <Link href="/users">Users</Link>
      </NavBarText>
      <LoadingState>
        <AuthNavSection />
      </LoadingState>
    </nav>
  );
}
