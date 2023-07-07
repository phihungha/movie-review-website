"use client";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

export interface SuccessSnackbarProps {
  display: boolean;
  onClose: () => void;
}

export function SuccessSnackbar({ display, onClose }: SuccessSnackbarProps) {
  return (
    <Snackbar
      open={display}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert sx={{ width: "100%" }} severity="success">
        Signed up successfully
      </Alert>
    </Snackbar>
  );
}
