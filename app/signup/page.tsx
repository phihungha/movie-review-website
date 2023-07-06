"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material";
import Link from "next/link";

//export const metadata = {
//  title: "Sign Up",
//};

function HandleSignUp() {
  console.log("api here!");
  return;
}

export default function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [userType, setUserType] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rePassword, setRePassword] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setUserType(event.target.value);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  function HandleSignUp(
    email: string,
    name: string,
    userName: string,
    userType: string,
    password: string,
    rePassword: string
  ) {
    console.log("api here!");
    return;
  }

  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="w-2/4 h-100 justify-center items-center gap-10">
        <h2 className="text-2xl p-20 text-center not-italic font-bold text-gray-900">
          Sign up
        </h2>
        <div className="px-10">
          <TextField
            className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
            label="Email"
            value={email}
          />
        </div>

        <div className="p-10">
          <TextField
            className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
            label="Name"
            value={name}
          />
        </div>

        <div className="px-10">
          <TextField
            className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
            label="Username"
            value={userName}
          />
        </div>

        <div className="p-10 w-full">
          <FormControl className="w-full" sx={{ minWidth: 120 }} size="small">
            <InputLabel sx={{ my: 1 }} id="demo-select-small-label">
              User Type
            </InputLabel>
            <Select
              className="h-14"
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={userType}
              label="User Type"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Critic">Critic</MenuItem>
              <MenuItem value="Regular">Regular</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="px-10">
          <FormControl className="w-full" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>

        <div className="p-10">
          <FormControl className="w-full" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Re-enter password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={"password"}
              label="Password"
              value={rePassword}
            />
          </FormControl>
        </div>

        <div className="self-center px-10 w-full">
          <Button
            className="px-20 w-full"
            variant="outlined"
            onClick={() =>
              HandleSignUp(
                email,
                name,
                userName,
                userType,
                password,
                rePassword
              )
            }
          >
            Sign up
          </Button>
        </div>
        <div className="flex flex-row text-start p-10 w-full">
          <h2 className="text-base  pt-0 pb-20 text-center not-italic font-bold text-gray-900">
            Already have an account
          </h2>
          <Link href="/signup">
            <h2 className="text-base pr-20 pt-0 pb-20 text-center not-italic font-bold text-gray-900">
              , sign in
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
