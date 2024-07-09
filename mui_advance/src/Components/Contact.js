import React from "react";
import contact from "../Assets/Contact.jpg";

function Contact() {
  return (
    <div style={{ flex: "1" }}>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-Around",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <div
          style={{
            fontWeight: "bolder",
            fontFamily: '"Dancing Script"',
            width: "100%",
            textAlign: "Right",
          }}
        >
          <div>
            <div>
              <h2 style={{ color: "#BF5A36" }}>Reach Out and Touch Magic:</h2>
              <h1 style={{ color: "#4F6D7A" }}>
                Connect With Nerdvana Today!!
              </h1>
            </div>
          </div>
        </div>
        <div style={{ alignItems: "flex-end" }}>
          <img style={{ width: "70%", marginRight: "0px" }} src={contact}></img>
        </div>
      </div>
    </div>
  );
}

export default Contact;
