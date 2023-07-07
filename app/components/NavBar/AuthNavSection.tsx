"use client";

import { appSignOut } from "@/app/lib/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NavBarText } from "../Texts/NavBarText";
import { Button } from "@mui/material";

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
      {isLoggedIn ? (
        <LoggedInSegment fullName={userFullName} />
      ) : (
        <NonLoggedInSegment />
      )}
    </nav>
  );
}

function NonLoggedInSegment() {
  return (
    <>
      <Button>
        <Link href="/signup">Sign up</Link>
      </Button>
      <Link href="/signin">Sign in</Link>
    </>
  );
}

function LoggedInSegment({ fullName }: { fullName: string | null }) {
  const router = useRouter();

  return (
    <>
      <Link href="/personal">
        <NavBarText>Welcome, {fullName}</NavBarText>
      </Link>
      <Button
        variant="outlined"
        onClick={async () => {
          await appSignOut();
          router.replace("/");
        }}
      >
        Sign out
      </Button>
    </>
  );
}
