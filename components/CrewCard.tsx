import React from "react";
import Avatar from "@mui/material/Avatar";

export interface ICrewCard {
  id: string;
  Name: string;
  role: string;
  avatar_path: string;
}

const CrewCard = ({ user }: { user: ICrewCard }) => {
  return (
    <div className="flex flex-col place-content-center justify-center items-center pt-7 h-20 gap-1">
      <Avatar
        className="items-center text-center w-16 h-16"
        src={user.avatar_path}
        alt={user.Name}
        sx={{ width: 20, height: 20 }}
      />
      <h2 className="h-5 not-italic font-normal items-center text-center text-sm leading-6 text-black-100">
        {user.Name}
      </h2>
      <h2 className="h-5 not-italic font-normal items-center text-center text-xs leading-4 text-black-500">
        {user.role}
      </h2>
    </div>
  );
};

export default CrewCard;
