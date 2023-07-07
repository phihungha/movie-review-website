"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import PasswordField from "@/components/Inputs/PasswordField";
import { UserType } from "@/types/UserType";
import { axiosInstance } from "@/lib/client-api";
import { appSignIn, appSignOut, createFirebaseUser } from "@/lib/auth";
import { SuccessSnackbar } from "@/components/Snackbars/SuccessSnackBar";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import { User } from "firebase/auth";

async function signUp(
  name: string,
  username: string,
  email: string,
  userType: UserType,
  password: string,
  blogUrl: string
) {
  let user: User | null;
  try {
    user = (await createFirebaseUser(email, password, name)).user;
  } catch (err) {
    user = (await appSignIn(email, password)).user;
  }

  const idToken = await user.getIdToken();

  try {
    await axiosInstance.post(
      "/personal",
      {
        username,
        type: userType.toLowerCase(),
        blogUrl,
      },
      { headers: { Authorization: `Bearer ${idToken}` } }
    );
  } catch (err) {
    throw err;
  } finally {
    await appSignOut();
  }
}

export default function SignInForm() {
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [userType, setUserType] = React.useState<UserType>("Regular");
  const [blogUrl, setBlogUrl] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rePassword, setRePassword] = React.useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const router = useRouter();

  const onSignUp = async () => {
    setIsLoading(true);
    try {
      await signUp(name, username, email, userType, password, blogUrl);
      setDisplaySuccess(true);
      router.push("/signin");
    } catch (err) {
      setIsLoading(false);
      throw err;
    }
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
        value={username}
        onChange={(i) => setUsername(i.target.value)}
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

      {isLoading ? (
        <CircularProgress />
      ) : (
        <Button className="w-full" variant="outlined" onClick={onSignUp}>
          Sign up
        </Button>
      )}

      {displaySuccess && (
        <SuccessSnackbar
          onClose={() => setDisplaySuccess(false)}
          display={displaySuccess}
        />
      )}
    </div>
  );
}
