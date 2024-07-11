import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Data } from "../../Assets/Data/Data";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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
//  --------------------------------------------------------- function starts ------------------------------------------------------------------------ //
function Grid() {
  const [rowData, setRowData] = useState([]);
  const [open, setOpen] = useState(false);
  const [editOrAddState, seteditOrAddState] = useState("add");
  const [userState, setuserState] = useState({
    name: "",
    username: "",
    email: "",
    bookReturned: "",
    bookName: "",
    returnDate: "",
  });

  // --------------------------------------------------------- columns  -------------------------------------------------------------//
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
    //------------------------------ Actions ----------------------//
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
            setuserState(params.row);
            return AddOrEdit("edit", params.row);
          }}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          onClick={() => {
            setuserState(params.row);
            return handelDeleteButton("del", params.row);
          }}
        />,
      ],
    },
  ];

  // ----------------------------------------    HANDEL EDIT OR ADD or Delete LOGIC   -----------------------------------------||

  const AddOrEdit = (editDeleteorAddReference, rowObjfromEditOrDelete) => {
    if (editDeleteorAddReference == "add") {
      console.log("Add function will be called");
      commonHandel();
    } else if (editDeleteorAddReference == "edit") {
      console.log("Edit function will be called ");
      // console.log(rowObjfromEdit);
      handelEditButton(rowObjfromEditOrDelete);
    } else if (editDeleteorAddReference == "del") {
      handelDeleteButton(rowObjfromEditOrDelete);
    }
  };

  // ------------------------------------------------------Edit Logic -------------------------------------------------- //
  const handelEditButton = (editRows) => {
    console.log("logging from handel edit button");
    // console.log(editRows);
    // console.log(editRows.id);
    setuserState(editRows);
    commonHandel();
    setuserState(userState);
    // console.log("loggin id from user state", userState.id);
    handlingEditSubmission();
  };

  const handlingEditSubmission = () => {
    let index = userState.id;
    console.log("from edit submission", index);
    // rowData.map((row) => console.log(row.id));
    rowData.filter((row) => "");
    // rowData.filter((row) => (!row.id))
  };

  // ----------------------------------------------------- Delete Logic -------------------------------------------------- //
  const handelDeleteButton = (stringforsettingstate, deleteRows) => {
    console.log("logging from handel delete button");
    // console.log(editRows);
    // console.log(editRows.id);
    seteditOrAddState(stringforsettingstate);
    setuserState(deleteRows);
    commonHandel();
    // setuserState();
    // console.log("loggin id from user state", userState.id);
    handlingDeleteSubmission();
  };

  const handlingDeleteSubmission = (userState) => {
    let index = userState.id;
    console.log("from delete submission", index);
    rowData.map((row) => console.log(row.id));
    const exceptDeletedRowData = rowData.filter((row) => console.log(row.id));
    setRowData(exceptDeletedRowData);
    // rowData.filter((row) => (!row.id))
  };

  //<------------------------------------  Add  user from logic ----------------------------------------->//

  // handling display state
  const commonHandel = () => {
    setOpen((prev) => !prev);
  };

  // handling userState
  const handelNewUserState = (event) => {
    const name = event.target.name;
    setuserState((prev) => ({ ...prev, [name]: event.target.value }));
    // setuserState(event.target.value);
    console.log("event triggered");
    // console.log(userState);
  };

  // setting the new user using state and spread operator
  const pushUserinRowDataStateOnClickOfTheButtton = () => {
    // setRowData(userState)
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
        {/*----------------------------------------------- Add user Buttons------------------------------------------ */}
        <div style={{}}>
          <ColorButton
            sx={{ color: "white" }}
            variant="contained"
            onClick={commonHandel}
          >
            + Add User
          </ColorButton>
        </div>
        {/* conoditional rendering */}
        {/* {open ? displayAddDataForm() : <></>} */}
      </div>

      <DialogueComp
        pushUserinRowDataStateOnClickOfTheButtton={
          pushUserinRowDataStateOnClickOfTheButtton
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
