"use client";

import { Button, ButtonProps } from "@mui/material";

export function NavBarButton(props: ButtonProps) {
  return (
    <Button
      variant="contained"
      className="bg-white px-3 py-1 font-bold normal-case text-black hover:bg-white"
      {...props}
    />
  );
}
