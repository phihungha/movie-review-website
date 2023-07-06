import React from "react";
import Avatar from "@mui/material/Avatar";

export interface ICrewCard {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
}

const CrewCard = ({ user }: { user: ICrewCard }) => {
  return (
    <div className="flex flex-col place-content-center justify-center items-center pt-7 h-20 gap-1">
      <Avatar
        className="items-center text-center w-16 h-16"
        src={user.avatarUrl}
        alt={user.name}
        sx={{ width: 60, height: 60 }}
      />
      <h2 className="h-5 not-italic font-normal items-center text-center text-sm leading-6 text-black-100">
        {user.name}
      </h2>
      <h2 className="h-5 not-italic font-normal items-center text-center text-xs leading-4 text-black-500">
        {user.role}
      </h2>
    </div>
  );
};

export default CrewCard;
