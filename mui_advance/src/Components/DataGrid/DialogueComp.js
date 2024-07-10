import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ColorButton = styled(Button)(({ theme }) => ({
  width: "18rem",
  color: "white",
  backgroundColor: "#BF5A36",
  "&:hover": {
    backgroundColor: "#809CA8",
  },
}));

function DialogueComp({
  pushUserinRowDataStateOnClickOfTheButtton,
  handelNewUserState,
  userState,
  commonHandel,
  open,
}) {
  return (
    <div
      style={{
        border: "1px solid",
        padding: "5px",
        boxShadow: "5px 10px 18px #BF5A36",
      }}
    >
      <Dialog
        maxWidth="md"
        sx={{
          border: "1px solid",
          padding: "5px",
          boxShadow: "5px 10px 18px #BF5A36",
        }}
        open={open}
        onClose={commonHandel}
        // PaperProps={{
        //   component: "form",
        //   onSubmit: (event) => {
        //     // event.preventDefault();
        //     // const formData = new FormData(event.currentTarget);
        //     // const formJson = Object.fromEntries(formData.entries());
        //     // const email = formJson.email;
        //     // console.log(email);
        //     // commonHandel();
        //   },
        // }}
      >
        <DialogTitle>
          <Typography
            style={{
              color: "#BF5A36",
              padding: "2rem",
              fontFamily: '"Dancing Script", cursive',
              fontSize: "32px",
            }}
          >
            Add - <span style={{ color: "#4F6D7A" }}>User Details</span>
          </Typography>
        </DialogTitle>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            // width: "60%",
            margin: "auto",
          }}
        >
          {" "}
          <div
            style={{
              //   width: "90%",
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
            ></div>
            <div>
              <Box sx={{ flexGrow: 1 }}>
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
                            "& .MuiTextField-root": { m: 1 },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          {/* onchange function values start here */}
                          {/* <TextField
                            name="id"
                            value={userState.id}
                            required
                            id="outlined-required"
                            label="id"
                            defaultValue={Date.now()}
                            onChange={handelNewUserState}
                          /> */}
                          <TextField
                            name="name"
                            value={userState.name}
                            onChange={handelNewUserState}
                            required
                            id="outlined-required"
                            label="Name"
                          />
                          <TextField
                            name="username"
                            value={userState.username}
                            onChange={handelNewUserState}
                            required
                            id="outlined-required"
                            label="User Name"
                          />
                          <TextField
                            name="email"
                            value={userState.email}
                            onChange={handelNewUserState}
                            required
                            id="outlined-required"
                            label="E-mail"
                          />
                          {/* first 4 end here */}
                        </Box>
                      </div>
                      {/* other  */}
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
                            "& .MuiTextField-root": {
                              m: 1,
                              width: "50%",
                            },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <div>
                            <TextField
                              name="bookReturned"
                              value={userState.bookReturned}
                              onChange={handelNewUserState}
                              required
                              id="outlined-required"
                              label="Book Returned"
                            />
                            <TextField
                              name="bookName"
                              value={userState.bookName}
                              onChange={handelNewUserState}
                              required
                              id="outlined-required"
                              label="Book Name"
                            />
                            <TextField
                              name="issueDate"
                              value={userState.issueDate}
                              onChange={handelNewUserState}
                              required
                              id="outlined-required"
                              label="Issue Date"
                            />
                            <TextField
                              name="returnDate"
                              value={userState.returnDate}
                              onChange={handelNewUserState}
                              required
                              id="outlined-required"
                              label="Return Date"
                            />
                          </div>
                        </Box>
                      </div>
                      {/* other  */}
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </div>
        </div>
        <DialogActions>
          {/* <Button onClick={commonHandel}>Cancel</Button> */}
          <ColorButton
            sx={{ color: "white" }}
            variant="contained"
            onClick={commonHandel}
          >
            Exit
          </ColorButton>
          <div
            style={{
              padding: "1rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ColorButton
              type="submit"
              variant="contained"
              onClick={pushUserinRowDataStateOnClickOfTheButtton}
            >
              + SAVE
            </ColorButton>
          </div>
          {/* <Button type="submit">Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogueComp;
