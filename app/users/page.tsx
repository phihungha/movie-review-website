"use client";

import useSWR from "swr";
import UserCard, { IUserCard } from "@/components/UserCard";
import * as React from "react";
import TextField from "@mui/material/TextField";

//export const metadata = {
//  title: "Users",
//};

export default function Users() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const { data } = useSWR(`/users?searchTerm=${searchTerm}`);

  return (
    <div className="flex flex-col gap-12 p-24">
      <TextField
        className="w-full"
        id="input-search"
        label="Search users"
        variant="standard"
        onChange={(i) => setSearchTerm(i.target.value)}
      />

      <div className="grid grid-cols-5 place-items-start justify-center gap-10">
        {data?.map((user: IUserCard) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
