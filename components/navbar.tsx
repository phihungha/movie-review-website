import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex gap-5 justify-end">
      <Link href="/">Home</Link>
      <Link href="/movies">Movies</Link>
      <Link href="/users">Users</Link>
      <Link href="/personal">My Account</Link>
      <Link href="/signup">Sign up</Link>
      <Link href="/signin">Sign in</Link>
    </nav>
  );
}
