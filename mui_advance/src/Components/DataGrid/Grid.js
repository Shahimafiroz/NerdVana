import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Data } from "../../Assets/Data/Data";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
/*
{
"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
"Book Returned" : "Yes/No",
"Book Name" : "Percivers -By Jane Click",
"Issue date" : "16/09/2024",
"Return Date" : "14/03/2025"},
*/

const rows = Data;
console.log(Data, "data");
function Grid() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "Book Returned",
      headerName: "Book Returned",
      width: 150,
      editable: true,
    },
    {
      field: "Book Name",
      headerName: "Book Name",
      width: 250,
      editable: true,
    },
    {
      field: "Issue date",
      headerName: "Issue Date",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "Return Date",
      headerName: "Return Date",
      type: "number",
      width: 150,
      editable: true,
    },

    {
      field: "Actions",
      headerName: "actions",
      type: "actions",
      width: 150,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          onClick={() => console.log("Edit")}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          onClick={() => console.log("Delete")}
        />,
      ],
    },
  ];

  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div></div>
      <div style={{ width: "80%", margin: "auto" }}>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </div>
  );
}

export default Grid;
