"use client";

import axios from "axios";
import { ReactNode } from "react";
import { SWRConfig } from "swr";

const axiosInstance = axios.create({
  baseURL: "cinerate-web.05052023.xyz",
});

async function fetcher(url: string) {
  return await axiosInstance.get(url).then((res) => res.data);
}

interface SwrProviderProps {
  children: ReactNode;
}

export function SwrProvider({ children }: SwrProviderProps) {
  const swrConfig = {
    refreshInterval: 3000,
    fetcher,
  };
  return <SWRConfig value={swrConfig}>{children}</SWRConfig>;
}
