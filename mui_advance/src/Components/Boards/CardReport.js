import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ColorButton = styled(Button)(({ theme }) => ({
  width: "18rem",
  color: "#4F6D7A",
  backgroundColor: "#4F6D7A",
  "&:hover": {
    backgroundColor: "#809CA8",
  },
}));

function CardReport() {
  return (
    <div style={{ flex: "1" }}>
      <h1>Manage Users</h1>
      <ColorButton variant="contained">
        <NavLink
          style={{ textDecoration: "none", color: "white" }}
          to="/manage/id"
        >
          Manage Users
        </NavLink>
      </ColorButton>
    </div>
  );
}

export default CardReport;
