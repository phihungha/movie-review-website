"use client";
import Link from "next/link";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "name",
    headerName: "Name",
    width: 350,
    editable: false,
  },
  {
    field: "birth_day",
    headerName: "Birthday",
    width: 350,
    editable: false,
  },
  {
    field: "country",
    headerName: "Country",
    width: 350,
    editable: false,
  },
  {
    field: "detailLink",
    headerName: "",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    renderCell: () => <Link href="/users/1">Detail</Link>,
  },
];

type User = {
  id: number;
  name: string;
  birth_day: string;
  country: string;
};

const users: User[] = [
  {
    id: 1,
    name: "Trung",
    birth_day: "2002-10-26",
    country: "Viet Nam",
  },
  {
    id: 2,
    name: "Trung",
    birth_day: "2002-10-26",
    country: "Viet Nam",
  },
  {
    id: 3,
    name: "Trung",
    birth_day: "2002-10-26",
    country: "Viet Nam",
  },
  {
    id: 4,
    name: "Trung",
    birth_day: "2002-10-26",
    country: "Viet Nam",
  },
  {
    id: 5,
    name: "Trung",
    birth_day: "2002-10-26",
    country: "Viet Nam",
  },
  {
    id: 6,
    name: "Trung",
    birth_day: "2002-10-26",
    country: "Viet Nam",
  },
  {
    id: 7,
    name: "Trung",
    birth_day: "2002-10-26",
    country: "Viet Nam",
  },
];

//export const metadata = {
//  title: "Users",
//};

export default function Users() {
  return (
    <div className="p-20">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Box>
    </div>
  );
}
