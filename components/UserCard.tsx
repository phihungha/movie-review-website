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
      <div className="flex whitespace-nowrap flex-row p-0 gap-10">
        <Avatar
          className="items-center text-center w-16 h-16"
          src={user.avatarUrl}
          alt={user.name}
          sx={{ width: 20, height: 20 }}
        />
        <div className="flex flex-col justify-center items-start gap-1">
          <h2 className="h-5 not-italic font-normal items-center text-center text-sm leading-6 text-black-100">
            {user.name}
          </h2>
          <h2 className="h-5 not-italic font-normal items-center text-center text-sm leading-6 text-black-100">
            {user.username}
          </h2>
          <h2 className="h-5 not-italic font-normal items-center text-center text-xs leading-4 text-black-500">
            {user.userType}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
