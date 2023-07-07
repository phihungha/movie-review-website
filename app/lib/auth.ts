"use client";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
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
 * Sign in with Firebase.
 * @param email Email
 * @param password Password
 * @returns Firebase user credential
 */
export async function appSignIn(email: string, password: string) {
  return await signInWithEmailAndPassword(getAuth(), email, password);
}

/**
 * Create Firebase user.
 * @param email Email
 * @param password Password
 * @param displayName Display name
 * @returns Firebase user credential
 */
export async function createFirebaseUser(
  email: string,
  password: string,
  displayName: string
) {
  const cred = await createUserWithEmailAndPassword(getAuth(), email, password);
  await updateProfile(cred.user, { displayName });
  return cred;
}

/**
 * Update Firebase user.
 * @param email Email
 * @param password Password
 * @param displayName Display name
 */
export async function updateFirebaseUser(
  email?: string,
  password?: string,
  displayName?: string
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    throw new Error("No user is logged in");
  }

  displayName && (await updateProfile(currentUser, { displayName }));
  email && (await updateEmail(currentUser, email));
  password && (await updatePassword(currentUser, password));
}

/**
 * Sign out with Firebase.
 */
export async function appSignOut() {
  await signOut(getAuth());
}
