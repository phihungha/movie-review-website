"use client";
import axios from "axios";
import { getCurrentUserIdToken } from "./auth";

export const axiosInstance = axios.create({
  baseURL: "https://cinerate-web.05052023.xyz",
});

async function getAuthHeader() {
  const idToken = await getCurrentUserIdToken();
  const bearerToken = idToken ? `Bearer ${idToken}` : undefined;
  return { Authorization: bearerToken };
}

export async function fetcher(url: string) {
  return await axiosInstance
    .get(url, { headers: await getAuthHeader() })
    .then((res) => res.data);
}
