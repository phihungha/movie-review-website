"use client";

import { ReactNode } from "react";
import { SWRConfig } from "swr";
import { fetcher } from "../lib/client-api";

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
