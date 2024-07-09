import React from "react";
import home from "./../Assets/Home.jpg";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  width: "8rem",
  color: "#4F6D7A",
  backgroundColor: "#4F6D7A",
  "&:hover": {
    backgroundColor: "#809CA8",
  },
}));

function Home() {
  return (
    <div
      style={{
        flex: "1",
        fontFamily: "Nanum Pen Script",
        fontSize: "x-Large",
      }}
    >
      <div>
        <div>
          <img style={{ width: "50%" }} src={home} alt="error"></img>
        </div>
        <div>
          <h1 style={{ color: "#4F6D7A" }}>
            Expose Your Self To <br></br>
            <span style={{ color: "#BF5A36" }}> Something New </span>
          </h1>
        </div>
        <div>
          <ColorButton variant="contained">
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/about"
            >
              About
            </NavLink>
          </ColorButton>
        </div>
      </div>
    </div>
  );
}

export default Home;
