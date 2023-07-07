"use client";
import useSWR from "swr";
import UserCard, { IUserCard } from "@/components/UserCard";
import * as React from "react";

//export const metadata = {
//  title: "Users",
//};

export default function Users() {
  const { data, error } = useSWR("/users");
  return (
    <div className="place-items-center p-20">
      <div className="grid grid-cols-5 place-items-start justify-center gap-10">
        {data?.map((user: IUserCard) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
