"use client";

import { appSignOut } from "@/app/lib/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userFullName, setUserFullName] = useState<string | null>(null);

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserFullName(user.displayName);
      } else {
        setIsLoggedIn(false);
        setUserFullName(null);
      }
    });
  });

  return (
    <nav className="flex gap-5 justify-end p-5">
      <Link href="/">Home</Link>
      <Link href="/movies">Movies</Link>
      <Link href="/users">Users</Link>
      {isLoggedIn ? (
        <LoggedInSegment fullName={userFullName} />
      ) : (
        <NonLoggedInSegment />
      )}
    </nav>
  );
}

function LoggedInSegment({ fullName }: { fullName: string | null }) {
  const router = useRouter();

  return (
    <>
      <Link href="/personal">My Account</Link>
      <p>Welcome, {fullName}</p>
      <button
        onClick={async () => {
          await appSignOut();
          router.replace("/");
        }}
      >
        Sign out
      </button>
    </>
  );
}

function NonLoggedInSegment() {
  return (
    <>
      <Link href="/signup">Sign up</Link>
      <Link href="/signin">Sign in</Link>
    </>
  );
}
