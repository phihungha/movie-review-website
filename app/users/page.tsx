"use client";
import Link from "next/link";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import useSWR from "swr";
import * as React from "react";

function getDetailLink(params: GridRenderCellParams): string {
  const link = "/users/" + params.value;
  return link;
}

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 250,
    editable: false,
  },
  {
    field: "dateOfBirth",
    headerName: "Birthday",
    width: 150,
    editable: false,
  },
  {
    field: "email",
    headerName: "Email",
    width: 350,
    editable: false,
  },
  {
    field: "userType",
    headerName: "User Type",
    width: 150,
    editable: false,
  },
  {
    field: "id",
    headerName: "",
    width: 100,
    renderCell: (params) => <Link href={getDetailLink(params)}>Detail</Link>,
  },
];

type User = {
  id: string;
  name: string;
  dateOfBirth: string;
  email: string;
  userType: string;
};

//export const metadata = {
//  title: "Users",
//};

export default function Users() {
  const { data, error } = useSWR("/users");
  const users: User[] = [];
  data?.map((user: User) => users.push(user));
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
