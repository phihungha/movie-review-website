"use client";

import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";

export interface PasswordFieldProps {
  password: string;
  onPasswordChanged: (p: string) => void;
}

export default function PasswordField(props: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const onShowPassword = () => setShowPassword((show) => !show);

  return (
    <FormControl className="w-full" variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        value={props.password}
        onChange={(i) => props.onPasswordChanged(i.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onShowPassword}
              onMouseDown={(e) => e.preventDefault()}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}
