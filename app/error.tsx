"use client";

import { ErrorProps } from "../types/error-props";

export default function Error({ error }: ErrorProps) {
  return <p>Error: {error.message}</p>;
}
