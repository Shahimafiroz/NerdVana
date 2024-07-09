import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../Assets/Logo.png";

function Navbar() {
  return (
    <div>
      <div
        style={{ backgroundColor: "#BF5A36", width: "100%", height: "1rem" }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <img style={{ width: "6rem" }} src={logo} alt="err"></img>
          <h1
            style={{
              color: "#bf5a36",
              fontFamily: '"Dancing Script", cursive',
            }}
          >
            Nerd<span style={{ color: "#4f6d7a" }}>Vana</span>
          </h1>
        </div>
        <div
          style={{
            fontWeight: "bold",
            display: "flex",
          }}
        >
          <NavLink
            to="/"
            style={{
              padding: "1rem",
              textDecoration: "none",
              color: "#4F6D7A",
            }}
          >
            <p>Home</p>
          </NavLink>
          <NavLink
            to="/about"
            style={{
              padding: "1rem",
              textDecoration: "none",
              color: "#4F6D7A",
            }}
          >
            <p>About</p>
          </NavLink>
          <NavLink
            to="/manage"
            style={{
              padding: "1rem",
              textDecoration: "none",
              color: "#4F6D7A",
            }}
          >
            <p>Manage</p>
          </NavLink>
          <NavLink
            to="/contact"
            style={{
              padding: "1rem",
              textDecoration: "none",
              color: "#4F6D7A",
            }}
          >
            <p>Contact</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
