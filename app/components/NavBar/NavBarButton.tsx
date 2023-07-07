"use client";

import { Button, ButtonProps } from "@mui/material";

export function NavBarButton(props: ButtonProps) {
  return (
    <Button
      variant="contained"
      className="px-3 py-1 bg-white text-black hover:bg-white normal-case font-bold"
      {...props}
    />
  );
}
