"use client";

import "./app-api";
import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import "./firebase";
import { FirebaseApp } from "@firebase/app";
import { AxiosInstance } from "axios";
import { UserType } from "@/types/UserType";
import { getAuthHeader } from "./app-api";

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
 * Áp dụng facade pattern để phối hợp API của Firebase
 * và của server app (dùng Axios làm client) cho authentication.
 */
export class AuthService {
  firebaseApi: FirebaseApp;
  dataApi: AxiosInstance;

  constructor(firebaseApi: FirebaseApp, dataApi: AxiosInstance) {
    this.firebaseApi = firebaseApi;
    this.dataApi = dataApi;
  }

  async signUp(
    name: string,
    username: string,
    email: string,
    userType: UserType,
    password: string,
    blogUrl: string
  ) {
    let user: User | null;
    try {
      const cred = await createUserWithEmailAndPassword(
        getAuth(this.firebaseApi),
        email,
        password
      );
      await updateProfile(cred.user, { displayName: name });
      user = cred.user;
    } catch (err) {
      user = (await this.signIn(email, password)).user;
    }

    const idToken = await user.getIdToken();

    try {
      await this.dataApi.post(
        "/personal",
        {
          username,
          type: userType.toLowerCase(),
          blogUrl,
        },
        { headers: { Authorization: `Bearer ${idToken}` } }
      );
    } catch (err) {
      throw err;
    } finally {
      await this.signOut();
    }
  }

  async signIn(email: string, password: string) {
    return await signInWithEmailAndPassword(
      getAuth(this.firebaseApi),
      email,
      password
    );
  }

  async updateProfile(
    name?: string,
    email?: string,
    username?: string,
    password?: string,
    dateOfBirth?: string
  ) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      throw new Error("No user is logged in");
    }

    name && (await updateProfile(currentUser, { displayName: name }));
    email && (await updateEmail(currentUser, email));
    password && (await updatePassword(currentUser, password));

    await this.dataApi.patch(
      "/personal",
      {
        username,
        dateOfBirth,
      },
      { headers: await getAuthHeader() }
    );
  }

  async signOut() {
    await signOut(getAuth(this.firebaseApi));
  }
}
