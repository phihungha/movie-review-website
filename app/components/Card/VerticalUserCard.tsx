"use client";

import React from "react";
import Avatar from "@mui/material/Avatar";
import { UserData } from "@/types/UserData";

export default function VerticalUserCard({ user }: { user?: UserData }) {
  return (
    <div className="height-32 flex w-32 flex-col items-center gap-1">
      <Avatar
        src={user?.avatarUrl}
        alt={user?.name}
        sx={{ width: 70, height: 70 }}
      />
      <p className="text-center text-sm font-bold">{user?.name}</p>
      <p className="text-center text-sm">{user?.userType}</p>
    </div>
  );
}
