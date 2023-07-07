"use client";

import { Button, ButtonProps } from "@mui/material";
import React from "react";

export function NavBarButton(props: ButtonProps) {
  return <Button variant="outlined" {...props} />;
}
