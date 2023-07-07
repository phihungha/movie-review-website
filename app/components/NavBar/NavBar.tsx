import Link from "next/link";
import AuthNavSection from "./AuthNavSection";
import LoadingState from "../LoadingState/LoadingState";
import NavBarText from "../Texts/NavBarText";

export default function NavBar() {
  return (
    <nav className="flex justify-end p-4 gap-5 items-center bg-zinc-800">
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
