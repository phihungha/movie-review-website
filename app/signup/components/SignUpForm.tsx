"use client";

import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import PasswordField from "@/components/Inputs/PasswordField";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { UserType } from "@/types/UserType";

export default function SignInForm() {
  const [name, setName] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [userType, setUserType] = React.useState<UserType>("Regular");
  const [password, setPassword] = React.useState("");
  const [rePassword, setRePassword] = React.useState("");

  const router = useRouter();
  const onSignUp = async () => {
    router.replace("/signin");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <TextField
        className="w-full"
        label="Name"
        value={name}
        onChange={(i) => setName(i.target.value)}
      />

      <TextField
        className="w-full"
        label="Username"
        value={userName}
        onChange={(i) => setUserName(i.target.value)}
      />

      <TextField
        className="w-full"
        label="Email"
        value={email}
        onChange={(i) => setEmail(i.target.value)}
      />

      <FormControl className="w-full" size="small">
        <InputLabel id="demo-select-small-label">User type</InputLabel>
        <Select
          className="h-14"
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={userType}
          label="User type"
          onChange={(e) => setUserType(e.target.value as UserType)}
        >
          <MenuItem value="Critic">Critic</MenuItem>
          <MenuItem value="Regular">Regular</MenuItem>
        </Select>
      </FormControl>

      <PasswordField
        password={password}
        onPasswordChanged={(i) => setPassword(i)}
      />

      <PasswordField
        label="Re-enter password"
        password={rePassword}
        onPasswordChanged={(i) => setRePassword(i)}
      />

      <Button className="w-full" variant="outlined" onClick={onSignUp}>
        Sign up
      </Button>
    </div>
  );
}
