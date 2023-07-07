"use client";

import React from "react";
import Avatar from "@mui/material/Avatar";
import { UserData } from "@/types/UserData";

export default function VerticalUserCard({ user }: { user: UserData }) {
  return (
    <div className="w-30 flex h-20 flex-col items-center gap-1">
      <Avatar
        className="h-16 w-16"
        src={user.avatarUrl}
        alt={user.name}
        sx={{ width: 60, height: 60 }}
      />
      <p className="text-center text-sm font-bold">{user.name}</p>
      <p className="text-center text-sm">{user.userType}</p>
    </div>
  );
}
