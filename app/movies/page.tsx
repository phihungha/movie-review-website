"use client";
import MovieCard, { MovieData } from "@/components/MovieCard";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import FilterAlt from "@mui/icons-material/FilterAlt";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Search from "@mui/icons-material/Search";
import useSWR from "swr";

// export const metadata = {
//   title: "Movies",
// };

export default function Movies() {
  const { data, error } = useSWR("/movies");

  return (
    <div>
      <div className="flex items-end justify-end flex-row py-10 px-20">
        <Box className="flex items-end">
          <Search sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField id="input-search" label="Search" variant="standard" />
        </Box>
        <div>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button
                  className="self-end"
                  color="inherit"
                  {...bindTrigger(popupState)}
                >
                  <FilterAlt />
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Year</MenuItem>
                  <MenuItem onClick={popupState.close}>My account</MenuItem>
                  <MenuItem onClick={popupState.close}>Logout</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </div>
      </div>

      <div className="grid place-items-center grid-cols-4 p-5 gap-10 justify-center">
        {data?.map((movie: MovieData) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
