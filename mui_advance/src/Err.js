import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import error from "./Assets/error.svg";
import { NavLink } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  width: "8rem",
  color: "#4F6D7A",
  backgroundColor: "#4F6D7A",
  "&:hover": {
    backgroundColor: "#809CA8",
  },
}));

function Err() {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <img style={{ width: "45%" }} src={error}></img>
        </div>
        <div>
          <ColorButton variant="contained">
            <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
              Home
            </NavLink>
          </ColorButton>
        </div>
      </div>
    </div>
  );
}

export default Err;
