"use client";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

export async function appSignIn(email: string, password: string) {
  await signInWithEmailAndPassword(getAuth(), email, password);
}

export async function appSignOut() {
  await signOut(getAuth());
}
