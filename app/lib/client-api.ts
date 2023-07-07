"use client";

import axios from "axios";
import { getCurrentUserIdToken } from "./auth";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

export async function getAuthHeader() {
  const idToken = await getCurrentUserIdToken();
  const bearerToken = idToken ? `Bearer ${idToken}` : undefined;
  return { Authorization: bearerToken };
}

export async function fetcher(url: string) {
  const resp = await axiosInstance.get(url, { headers: await getAuthHeader() });
  return resp.data;
}
