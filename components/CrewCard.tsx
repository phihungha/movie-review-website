import React from "react";
import Avatar from "@mui/material/Avatar";

export interface ICrewCard {
  id: number;
  Name: string;
  role: string;
  avatar_path: string;
}

const CrewCard = ({ user }: { user: ICrewCard }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-7 w-20 h-20 gap-1">
      <Avatar
        className="items-center text-center w-16 h-16"
        src={user.avatar_path}
        alt={user.Name}
        sx={{ width: 60, height: 60 }}
      />
      <h2 className="w-24 h-5 not-italic font-normal items-center text-center text-base leading-6 text-gray-100">
        {user.Name}
      </h2>
      <h2 className="w-12 h-4 not-italic font-normal items-center text-center text-xs leading-4 text-gray-500">
        {user.role}
      </h2>
    </div>
  );
};

export default CrewCard;
