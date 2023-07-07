"use client";

import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import PasswordField from "@/components/Inputs/PasswordField";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { UserType } from "@/types/UserType";
import { axiosInstance } from "@/lib/client-api";
import { createFirebaseUser } from "@/lib/auth";

async function signUp(
  name: string,
  userName: string,
  email: string,
  userType: UserType,
  password: string,
  blogUrl: string
) {
  const cred = await createFirebaseUser(email, password);
  const idToken = await cred.user.getIdToken();
  await axiosInstance.post("/personal", {
    body: {
      userName,
      name,
      type: userType,
      blogUrl,
    },
    headers: `Bearer ${idToken}`,
  });
}

export default function SignInForm() {
  const [name, setName] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [userType, setUserType] = React.useState<UserType>("Regular");
  const [blogUrl, setBlogUrl] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rePassword, setRePassword] = React.useState("");

  const router = useRouter();
  const onSignUp = async () => {
    await signUp(name, userName, email, userType, password, blogUrl);
    router.replace("/signin");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <TextField
        required
        className="w-full"
        label="Name"
        value={name}
        onChange={(i) => setName(i.target.value)}
      />

      <TextField
        className="w-full"
        required
        label="Username"
        value={userName}
        onChange={(i) => setUserName(i.target.value)}
      />

      <TextField
        className="w-full"
        required
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

      {userType === "Critic" && (
        <TextField
          className="w-full"
          required
          label="Website URL"
          value={blogUrl}
          onChange={(i) => setBlogUrl(i.target.value)}
        />
      )}

      <PasswordField
        required
        password={password}
        onPasswordChanged={(i) => setPassword(i)}
      />

      <PasswordField
        required
        label="Re-enter password"
        helperText="Password does not match"
        password={rePassword}
        error={password !== "" && password !== rePassword}
        onPasswordChanged={(i) => setRePassword(i)}
      />

      <Button className="w-full" variant="outlined" onClick={onSignUp}>
        Sign up
      </Button>
    </div>
  );
}
