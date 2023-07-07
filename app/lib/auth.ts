"use client";

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import "./firebase";

export function getCurrentUser() {
  return getAuth().currentUser;
}

/**
 * Get ID token of current user for auth.
 * @returns ID token or null if is not logged in
 */
export async function getCurrentUserIdToken(): Promise<string | null> {
  const currentUser = getCurrentUser();
  if (currentUser) {
    return await currentUser.getIdToken();
  }
  return null;
}

/**
 * Sign in with Firebase
 * @param email Email
 * @param password Password
 */
export async function appSignIn(email: string, password: string) {
  await signInWithEmailAndPassword(getAuth(), email, password);
}

/**
 * Sign out with Firebase
 */
export async function appSignOut() {
  await signOut(getAuth());
}
