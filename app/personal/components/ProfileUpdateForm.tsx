"use client";

import PasswordField from "@/components/Inputs/PasswordField";
import { updateFirebaseUser } from "@/lib/auth";
import { axiosInstance, getAuthHeader } from "@/lib/client-api";
import { UserData } from "@/types/UserData";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import useSWR from "swr";

async function updateProfile(
  name?: string,
  email?: string,
  username?: string,
  password?: string,
  dateOfBirth?: string
) {
  await updateFirebaseUser(email, password, name);
  await axiosInstance.patch(
    "/personal",
    {
      username,
      dateOfBirth,
    },
    { headers: await getAuthHeader() }
  );
}

export function ProfileUpdateForm() {
  const { data, mutate } = useSWR<UserData>("/personal");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  useEffect(() => {
    setName(data?.name ?? "");
    setEmail(data?.email ?? "");
    setUsername(data?.username ?? "");
  }, [data]);

  const onReset = () => mutate();

  const onSave = async () => {
    await updateProfile(name, email, username, password);
    mutate();
  };

  return (
    <div className="flex w-9/12 flex-col   gap-5">
      <TextField
        className="w-full"
        label="Email"
        value={email}
        onChange={(i) => setEmail(i.target.value)}
      />
      <TextField
        className="w-full"
        label="Name"
        value={name}
        onChange={(i) => setName(i.target.value)}
      />
      <TextField
        className="w-full"
        label="User Name"
        value={username}
        onChange={(i) => setUsername(i.target.value)}
      />
      <PasswordField
        password={password}
        onPasswordChanged={(i) => setPassword(i)}
      />
      <PasswordField
        label="Re-enter password"
        helperText="Password does not match"
        password={rePassword}
        error={password !== "" && password !== rePassword}
        onPasswordChanged={(i) => setRePassword(i)}
      />

      <p className="text-lg font-bold">User Type: {data?.userType}</p>

      <div className="flex w-full justify-end gap-10">
        <Button
          className="px-20"
          color="error"
          onClick={onReset}
          variant="outlined"
        >
          Reset
        </Button>
        <Button className="px-20" onClick={onSave} variant="outlined">
          Save
        </Button>
      </div>
    </div>
  );
}
