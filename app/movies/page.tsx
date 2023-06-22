"use client";
import MovieCard from "@/components/MovieCard";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import FilterAlt from "@mui/icons-material/FilterAlt";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Search from "@mui/icons-material/Search";

type Movie = {
  id: number;
  title: string;
  year: number;
  poster_path: string;
  critic_score: number;
  regular_score: number;
};

const movies: Movie[] = [
  {
    id: 1,
    title: "John Wick",
    year: 2014,
    poster_path:
      "https://static.wikia.nocookie.net/john-wick8561/images/7/7c/Chapterfour.jpeg/revision/latest?cb=20230523074638",
    critic_score: 7,
    regular_score: 8,
  },
  {
    id: 2,
    title: "John Wick",
    year: 2014,
    poster_path:
      "https://static.wikia.nocookie.net/john-wick8561/images/7/7c/Chapterfour.jpeg/revision/latest?cb=20230523074638",
    critic_score: 7,
    regular_score: 8,
  },
  {
    id: 3,
    title: "John Wick",
    year: 2014,
    poster_path:
      "https://static.wikia.nocookie.net/john-wick8561/images/7/7c/Chapterfour.jpeg/revision/latest?cb=20230523074638",
    critic_score: 7,
    regular_score: 8,
  },
  {
    id: 4,
    title: "John Wick",
    year: 2014,
    poster_path:
      "https://static.wikia.nocookie.net/john-wick8561/images/7/7c/Chapterfour.jpeg/revision/latest?cb=20230523074638",
    critic_score: 7,
    regular_score: 8,
  },
  {
    id: 5,
    title: "John Wick",
    year: 2014,
    poster_path:
      "https://static.wikia.nocookie.net/john-wick8561/images/7/7c/Chapterfour.jpeg/revision/latest?cb=20230523074638",
    critic_score: 7,
    regular_score: 8,
  },
  {
    id: 6,
    title: "John Wick",
    year: 2014,
    poster_path:
      "https://static.wikia.nocookie.net/john-wick8561/images/7/7c/Chapterfour.jpeg/revision/latest?cb=20230523074638",
    critic_score: 7,
    regular_score: 8,
  },
];

//export const metadata = {
//title: "Movies",
//};

export default async function Movies() {
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
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
