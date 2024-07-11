import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({ commonHandel, open }) {
  return (
    <>
      <div
        style={{
          border: "1px solid",
          padding: "5px",
          boxShadow: "5px 10px 18px #BF5A36",
        }}
      >
        <Dialog
          open={open}
          onClose={commonHandel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"User deleted sucessfully."}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Following user has been sucessfully deleted from your dataBase.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={commonHandel} autoFocus>
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
