"use client";
import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { InputLabel, FormControl, Select, Divider } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimeField } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Link from "next/link";

//export const metadata = {
//  title: "My account",
//};

export default function Personal() {
  const [userType, setUserType] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );
  const handleChange = (event: SelectChangeEvent) => {
    setUserType(event.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="items-center justify-center py-20">
        <div className="flex place-items-center flex-row px-20 w-full">
          <div className="flex flex-col text-center place-items-center px-20 gap-5">
            <Avatar
              className="items-center text-center w-16 h-16"
              src=""
              alt="Trung"
              sx={{ width: 240, height: 380 }}
            />
            <div className="self-center w-full">
              <Button className="px-2" variant="outlined">
                Choose Avatar
              </Button>
            </div>
          </div>
          <Divider orientation="vertical" className="w-5" flexItem />
          <div className="flex flex-col items-center  w-9/12 px-20 gap-3">
            <div className="px-10 w-full">
              <TextField
                className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
                label="Email"
              />
            </div>

            <div className="px-10 py-5 w-full">
              <TextField
                className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
                label="Name"
              />
            </div>

            <div className="px-10 w-full">
              <TextField
                className="w-full p-0 not-italic font-bold text-base leading-6 text-gray-100"
                label="User Name"
              />
            </div>

            <div className="px-10 py-5 w-full">
              <DateTimeField
                className="w-full"
                label="Birthday"
                value={dateOfBirth}
                onChange={(newValue) => setDateOfBirth(newValue)}
                format="L"
              />
            </div>

            <div className="px-10 w-full">
              <FormControl
                className="w-full"
                sx={{ minWidth: 120 }}
                size="small"
              >
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
                  <MenuItem value={2}>Critic</MenuItem>
                  <MenuItem value={3}>Regular</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end p-20 w-full gap-10 h-6">
          <div className="self-center">
            <Button color="error" className="px-20" variant="outlined">
              Reset
            </Button>
          </div>
          <div className="self-center">
            <Button className="px-20" variant="outlined">
              Save
            </Button>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full gap-10 p-20 h-6">
          <Link href="/personal/reviews">
            <div className="self-center">
              <Button className="px-20" variant="outlined">
                All Reviews
              </Button>
            </div>
          </Link>
          <Link href="/personal/thankedReviews">
            <div className="self-center">
              <Button className="px-20" variant="outlined">
                Thanked Reviews
              </Button>
            </div>
          </Link>
          <Link href="/personal/viewedMovies">
            <div className="self-center">
              <Button className="px-20" variant="outlined">
                Viewed Movies
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </LocalizationProvider>
  );
}
