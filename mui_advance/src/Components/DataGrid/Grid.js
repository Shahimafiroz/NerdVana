import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Data } from "../../Assets/Data/Data";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import DialogueComp from "./DialogueComp";
import DeleteDialogue from "./DeleteDialogue";

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
  const [delopen, setdelOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [addEditOrDeleteState, setaddEditOrDeleteState] = useState("add");
  const [userState, setuserState] = useState({
    name: "",
    username: "",
    email: "",
    bookReturned: "",
    bookName: "",
    issueDate: "",
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
      field: "username",
      headerName: "User Name",
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
          onClick={() => handelEditButton(params.row)}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          onClick={() => handelDeleteButton(params.row)}
        />,
      ],
    },
  ];

  // ----------------------------------------    HANDEL EDIT OR ADD or Delete LOGIC   -----------------------------------------||

  // ------------------------------------------------------Edit Logic -------------------------------------------------- //
  const handelEditButton = (editRow) => {
    console.log(editRow);

    setaddEditOrDeleteState("edit");
    setuserState(editRow);
    commonHandel();
    // const updatedArray = rowData.map((eachRow) => {
    //   if (eachRow.id == userState.id) {
    //     return userState;
    //   } else {
    //     return eachRow;
    //   }
    // });
    // console.log(updatedArray);
    // setRowData(updatedArray);
  };
  const editDataHandler = () => {
    console.log(userState);
    const updatedArray = rowData.map((eachRow) => {
      if (eachRow.id == userState.id) {
        return userState;
      } else {
        return eachRow;
      }
    });
    console.log(updatedArray);
    setRowData(updatedArray);
    commonHandel();
    setaddEditOrDeleteState("add");
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

  // ----------------------------------------------------- Delete Logic -------------------------------------------------- //
  const delCommonHandel = () => {
    setdelOpen((prev) => !prev);
  };

  const handelDeleteButton = (deleteRow) => {
    // console.log(deleteRow);
    setaddEditOrDeleteState("del");
    // console.log(addEditOrDeleteState);
    setuserState(deleteRow);
    // console.log(userState);
    const index = deleteRow.id;
    // rowData.map((eachRow) => console.log(eachRow.id));
    const updatedArray = rowData.filter((eachRow) => eachRow.id != index);
    delCommonHandel();
    console.log(updatedArray);
    setRowData(updatedArray);
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
    commonHandel();
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
        editDataHandler={editDataHandler}
        addEditOrDeleteState={addEditOrDeleteState}
        pushUserinRowDataStateOnClickOfTheButtton={
          pushUserinRowDataStateOnClickOfTheButtton
        }
        handelNewUserState={handelNewUserState}
        userState={userState}
        commonHandel={commonHandel}
        open={open}
      />
      <DeleteDialogue commonHandel={delCommonHandel} open={delopen} />
    </>
  );
}

export default Grid;
