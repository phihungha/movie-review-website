"use client";

import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { appSignIn } from "@/lib/auth";
import PasswordField from "@/components/Inputs/PasswordField";

export default function SignInForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const router = useRouter();
  const onSignIn = async () => {
    await appSignIn(email, password);
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <TextField
        className="w-full"
        label="Email"
        value={email}
        onChange={(i) => setEmail(i.target.value)}
      />
      <PasswordField
        password={password}
        onPasswordChanged={(i) => setPassword(i)}
      />
      <Button className="w-full" variant="outlined" onClick={onSignIn}>
        Sign in
      </Button>
    </div>
  );
}
