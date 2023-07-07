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
    <div className="flex h-20 flex-col place-content-center items-center justify-center gap-1 pt-7">
      <Avatar
        className="h-16 w-16 items-center text-center"
        src={user.avatarUrl}
        alt={user.name}
        sx={{ width: 60, height: 60 }}
      />
      <h2 className="text-black-100 h-5 items-center text-center text-sm font-normal not-italic leading-6">
        {user.name}
      </h2>
      <h2 className="text-black-500 h-5 items-center text-center text-xs font-normal not-italic leading-4">
        {user.role}
      </h2>
    </div>
  );
};

export default CrewCard;
