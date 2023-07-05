"use client";
import MovieCard, { MovieData } from "@/components/MovieCard";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import FilterAlt from "@mui/icons-material/FilterAlt";
import Box from "@mui/material/Box";
import { InputLabel, FormControl, Select, Divider } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import TextField from "@mui/material/TextField";
import Search from "@mui/icons-material/Search";
import useSWR from "swr";

// export const metadata = {
//   title: "Movies",
// };

export default function Movies() {
  const { data, error } = useSWR("/movies");
  const [filterType, setFilterType] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setFilterType(event.target.value);
  };

  function HandleClear() {
    console.log("api here!");
    return;
  }
  return (
    <div>
      <div className="flex flex-col p-20 gap-5">
        <div className="flex flex-row w-full place-items-start gap-10">
          <Box className="flex items-center w-1/2">
            <TextField
              className="w-full"
              id="input-search"
              label="Search"
              variant="standard"
            />
          </Box>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Filter</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={filterType}
              label="Filter"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Year</MenuItem>
              <MenuItem value={2}>Critic Score</MenuItem>
              <MenuItem value={3}>Regular Score</MenuItem>
            </Select>
          </FormControl>
          <Box className="flex items-center">
            <TextField
              className="w-40"
              id="input-min"
              label="Min"
              variant="standard"
            />
          </Box>
          <Box className="flex items-center">
            <TextField
              className="w-40"
              id="input-max"
              label="Max"
              variant="standard"
            />
          </Box>
        </div>
        <div className="flex flex-row w-full place-items-start gap-10">
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Sort by</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={filterType}
              label="Filter"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Year</MenuItem>
              <MenuItem value={2}>Critic Score</MenuItem>
              <MenuItem value={3}>Regular Score</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Order</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={filterType}
              label="Filter"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Ascending</MenuItem>
              <MenuItem value={2}>Descending</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className=" pt-10 items-end text-end">
          <Button
            className="px-20"
            color="warning"
            variant="outlined"
            onClick={HandleClear}
          >
            Clear
          </Button>
        </div>
        <div className="pt-16">
          <Divider className="w-full" />
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
