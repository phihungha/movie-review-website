import React from "react";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";

export interface IUserCard {
  id: string;
  name: string;
  username: string;
  userType: string;
  avatarUrl: string;
}

const UserCard = ({ user }: { user: IUserCard }) => {
  const link = "/users/" + user.id;
  return (
    <Link href={link}>
      <div className="flex flex-row gap-10 whitespace-nowrap p-0">
        <Avatar
          className="h-16 w-16 items-center text-center"
          src={user.avatarUrl}
          alt={user.name}
          sx={{ width: 60, height: 60 }}
        />
        <div className="flex flex-col items-start justify-center gap-1">
          <h2 className="text-black-100 h-5 items-center text-center text-sm font-normal not-italic leading-6">
            {user.name}
          </h2>
          <h2 className="text-black-100 h-5 items-center text-center text-sm font-normal not-italic leading-6">
            {user.username}
          </h2>
          <h2 className="text-black-500 h-5 items-center text-center text-xs font-normal not-italic leading-4">
            {user.userType}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
