"use client";

import Link from "next/link";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { appSignOut } from "@/lib/auth";
import { NavBarButton } from "./NavBarButton";
import NavBarText from "../Texts/NavBarText";

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
    <>
      {isLoggedIn ? (
        <LoggedInSegment userFullName={userFullName} />
      ) : (
        <NonLoggedInSegment />
      )}
    </>
  );
}

function NonLoggedInSegment() {
  return (
    <>
      <NavBarButton>
        <Link href="/signup">Sign up</Link>
      </NavBarButton>
      <NavBarButton>
        <Link href="/signin">Sign in</Link>
      </NavBarButton>
    </>
  );
}

function LoggedInSegment({ userFullName }: { userFullName: string | null }) {
  const router = useRouter();

  const onSignOut = async () => {
    await appSignOut();
    router.refresh();
  };

  return (
    <>
      <Link href="/personal">
        <NavBarText>My account</NavBarText>
      </Link>
      <Link href="/personal">
        <NavBarText>Welcome, {userFullName}</NavBarText>
      </Link>
      <NavBarButton onClick={onSignOut}>Sign out</NavBarButton>
    </>
  );
}
