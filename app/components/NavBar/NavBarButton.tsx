"use client";

import { Button } from "@mui/material";
import React from "react";

export function NavBarButton({ children }: { children: React.ReactNode }) {
  return <Button variant="outlined">{children}</Button>;
}
