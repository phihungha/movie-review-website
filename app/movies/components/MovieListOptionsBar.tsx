"use client";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

type MovieOrderBy =
  | "releaseDate"
  | "criticScore"
  | "regularScore"
  | "viewedUserCount";

export interface MovieListOptions {
  searchTerm: string;
  orderBy: MovieOrderBy;
  asc: string;
}

export interface MovieListOptionsProps {
  options: MovieListOptions;
  onOptionsChanged: (i: MovieListOptions) => void;
}

export default function MovieListOptionsBar({
  options,
  onOptionsChanged,
}: MovieListOptionsProps) {
  const updateOptions = (name: string, value: string) => {
    onOptionsChanged({ ...options, [name]: value });
  };

  return (
    <div className="flexCol flex gap-5">
      <div className="flex justify-center gap-5">
        <TextField
          className="w-full"
          id="input-search"
          label="Search"
          variant="standard"
          onChange={(i) => updateOptions("searchTerm", i.target.value)}
        />

        <FormControl sx={{ minWidth: 200 }} size="small">
          <InputLabel id="demo-select-small-label">Sort by</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={options.orderBy}
            label="Filter"
            onChange={(i) => updateOptions("orderBy", i.target.value)}
          >
            <MenuItem value="releaseDate">Release date</MenuItem>
            <MenuItem value="criticScore">Critic Score</MenuItem>
            <MenuItem value="regularScore">Regular Score</MenuItem>
            <MenuItem value="viewedUserCount">Viewed user count</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200 }} size="small">
          <InputLabel id="demo-select-small-label">Order</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={options.asc}
            label="Filter"
            onChange={(i) => updateOptions("asc", i.target.value)}
          >
            <MenuItem value="true">Ascending</MenuItem>
            <MenuItem value="false">Descending</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
