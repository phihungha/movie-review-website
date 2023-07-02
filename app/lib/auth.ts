"use client";
import { getAuth } from "firebase/auth";
import "./firebase";

export function getCurrentUser() {
  return getAuth().currentUser;
}

export async function getCurrentUserIdToken(): Promise<string | null> {
  const currentUser = getCurrentUser();
  if (currentUser) {
    return await currentUser.getIdToken();
  }
  return null;
}
