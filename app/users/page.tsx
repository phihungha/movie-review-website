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
    <div className="p-20 place-items-center">
      <div className="grid place-items-start grid-cols-5 gap-10 justify-center">
        {data?.map((user: IUserCard) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
