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
import Link from "next/link";
//export const metadata = {
//  title: "Sign In",
//};

export default function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="shadow-2xl w-2/4 h-100 justify-center items-center gap-10">
        <h2 className="text-2xl p-20 text-center not-italic font-bold text-gray-900">
          Sign in
        </h2>
        <div className="px-10">
          <TextField
            className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
            label="Email"
          />
        </div>
        <div className="p-10">
          <FormControl className="w-full" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
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
        <div className="self-center px-10 w-full">
          <Button className="px-20 w-full" variant="outlined">
            Sign in
          </Button>
        </div>
        <div className="flex flex-row text-start px-10 w-full">
          <h2 className="text-base  pt-10 pb-20 text-center not-italic font-bold text-gray-900">
            Didn’t have an account
          </h2>
          <Link href="/signup">
            <h2 className="text-base pr-20 pt-10 pb-20 text-center not-italic font-bold text-gray-900">
              , sign up
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
