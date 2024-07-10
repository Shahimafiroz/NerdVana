import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

const ColorButton = styled(Button)(({ theme }) => ({
  width: "18rem",
  color: "white",
  backgroundColor: "#BF5A36",
  "&:hover": {
    backgroundColor: "#809CA8",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function AddData({ handelAddforDisplayState }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "60%",
        margin: "auto",
        border: "1px solid",
        padding: "5px",
        boxShadow: "5px 10px 18px #BF5A36",
      }}
    >
      {" "}
      <div
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column ",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <div
          style={{
            fontWeight: "bolder",
            fontFamily: '"Dancing Script", cursive',
          }}
        >
          <h1 style={{ color: "#BF5A36", padding: "2 rem" }}>
            Add - <span style={{ color: "#4F6D7A" }}>User Details</span>
          </h1>
          <p></p>
        </div>
        <div>
          <Box sx={{ flexGrow: 1, justifyContent: "center" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6}>
                <Item>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      textAlign: "left",
                    }}
                  >
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "50ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        required
                        id="outlined-required"
                        label="id"
                        defaultValue="0"
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        defaultValue=""
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="User Name"
                        defaultValue=""
                      />
                      <TextField
                        required
                        id="outlined-required"
                        label="E-mail"
                        defaultValue=""
                      />
                    </Box>
                  </div>
                  {/* other  */}

                  <div
                    style={{
                      padding: "1rem",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <ColorButton variant="contained" onClick={() => {}}>
                      + Add User
                    </ColorButton>
                  </div>
                </Item>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Item>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      textAlign: "left",
                    }}
                  >
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "50ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <TextField
                          required
                          id="outlined-required"
                          label="Book Returned"
                          defaultValue="No"
                        />
                        <TextField
                          required
                          id="outlined-required"
                          label="Book Name"
                          defaultValue=""
                        />
                        <TextField
                          required
                          id="outlined-required"
                          label="Issue Date"
                          defaultValue="00/00/00"
                        />
                        <TextField
                          required
                          id="outlined-required"
                          label="Return Date"
                          defaultValue="00/00/00"
                        />
                      </div>
                    </Box>
                  </div>
                  {/* other  */}
                  <div
                    style={{
                      padding: "1rem",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <ColorButton
                      sx={{ color: "white" }}
                      variant="contained"
                      onClick={() => handelAddforDisplayState}
                    >
                      Exit
                    </ColorButton>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default AddData;
