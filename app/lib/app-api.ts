"use client";

import { getCurrentUserIdToken } from "./auth";
import { axiosInstance } from "./client-api";

export async function getAuthHeader() {
  const idToken = await getCurrentUserIdToken();
  const bearerToken = idToken ? `Bearer ${idToken}` : undefined;
  return { Authorization: bearerToken };
}

export async function fetcher(url: string) {
  const resp = await axiosInstance.get(url, { headers: await getAuthHeader() });
  return resp.data;
}
