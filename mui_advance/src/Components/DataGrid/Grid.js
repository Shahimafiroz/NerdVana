import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Data } from "../../Assets/Data/Data";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddData from "./AddData";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import DialogueComp from "./DialogueComp";

const ColorButton = styled(Button)(({ theme }) => ({
  width: "18rem",
  color: "#4F6D7A",
  backgroundColor: "#4F6D7A",
  "&:hover": {
    backgroundColor: "#809CA8",
  },
}));

const rows = Data;
console.log(rows);
/////////////////////////////////////// function starts  /////////////////////
function Grid() {
  // -------------------------------------------------- States ------------------------------------------//
  const [rowData, setRowData] = useState([]);
  const [open, setOpen] = useState(false);
  const [addOrEditState, setaddOrEditState] = useState("edit");
  const [userState, setuserState] = useState({
    name: "",
    username: "",
    email: "",
    bookReturned: "",
    bookName: "",
    issueDate: "",
    returnDate: "",
  });
  //----------------------------------------------- Edit logic ----------------------------------------------------//
  const handelEditButton = (editRows) => {
    console.log("logging from handel edit button");
    console.log(editRows);
    setuserState(editRows);
    console.log(userState);
    commonHandel();
    setaddOrEditState("edit");
  };

  //---------------------------------------------- columns --------------------------------------------------------//

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
      field: "bookReturned",
      headerName: "Book Returned",
      width: 150,
      editable: true,
    },
    {
      field: "bookName",
      headerName: "Book Name",
      width: 250,
      editable: true,
    },
    {
      field: "issueDate",
      headerName: "Issue Date",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "returnDate",
      headerName: "Return Date",
      type: "number",
      width: 150,
      editable: true,
    },
    ///////////////////////////////////               Actions                     /////////////////////
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 150,
      getActions: (params) => [
        <GridActionsCellItem
          key={params}
          icon={<EditIcon />}
          onClick={() => {
            setaddOrEditState("edit");
            return handelClickOfEditandAdduserButton(
              addOrEditState,
              params.row
            );
          }}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          onClick={() => console.log("Delete")}
        />,
      ],
    },
  ];

  //<------------------------------------------  Add logic -------------------------------------------------------->//

  // handling display state
  const commonHandel = () => {
    setOpen((prev) => !prev);
  };

  // handling userState
  const handelNewUserState = (event) => {
    const name = event.target.name;
    setuserState((prev) => ({ ...prev, [name]: event.target.value }));
    console.log(userState);
    // setuserState(event.target.value);
    console.log("event triggered");
    // console.log(userState);
  };

  // setting the new user using state and spread operator
  const pushUserinRowDataStateOnClickOfTheButtton = () => {
    // setRowData(userState)
    commonHandel();
    console.log("The Button from Add component was clicked");
    console.log(userState);
    let updatedState = { ...userState, id: Date.now() };
    setRowData((prev) => [...prev, updatedState]);
    setuserState({
      id: "",
      name: "",
      username: "",
      email: "",
      bookReturned: "",
      bookName: "",
      issueDate: "",
      returnDate: "",
    });
  };

  //-------------------------------------- Add or edit ???  logic ---------------------------------------->//

  const handelClickOfEditandAdduserButton = (
    addOrEditState,
    datafromEditButton
  ) => {
    if (addOrEditState == "add") {
      console.log("add");
      // handelNewUserState();  -->  i defined this here for the (name) error
      pushUserinRowDataStateOnClickOfTheButtton();
    } else {
      console.log(datafromEditButton);
      handelEditButton(datafromEditButton);
    }
  };
  //-----------end ----------------------//
  return (
    // parent div starts
    <>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        {/* grid div starts */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div style={{ width: "80%", margin: "auto" }}>
            <Box sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rowData}
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
        {/* grid ends */}
        {/*         ------------------------------------------------------- Add user Buttons ---------------------------------------------------            */}
        <div style={{}}>
          <ColorButton
            sx={{ color: "white" }}
            variant="contained"
            onClick={() => {
              setaddOrEditState("add");
              handelClickOfEditandAdduserButton(addOrEditState, {});
            }}
          >
            + Add User
          </ColorButton>
        </div>
        {/* ------------------------------------------conoditional rendering--------------------------------------------- */}
        {/* {open ? displayAddDataForm() : <></>} */}
      </div>

      <DialogueComp
        pushUserinRowDataStateOnClickOfTheButtton={
          handelClickOfEditandAdduserButton
        }
        handelNewUserState={handelNewUserState}
        userState={userState}
        commonHandel={commonHandel}
        open={open}
      />
    </>
  );
}

export default Grid;

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
