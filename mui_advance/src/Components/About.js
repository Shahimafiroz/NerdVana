import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import books from "../Assets/About/books.jpg";
import events from "../Assets/About/events.png";
import ebook from "../Assets/About/Ebook.png";
import castel from "../Assets/About/Castel.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function About() {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "80%",
        margin: "auto",
      }}
    >
      {" "}
      <div
        style={{
          width: "70%",
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
            NerdVana -
            <span style={{ color: "#4F6D7A" }}>
              Your portal to Nerd Nirvana
            </span>
          </h1>
          <p></p>
        </div>
        <div>
          <Box sx={{ flexGrow: 1, justifyContent: "center" }}>
            <Grid
              container
              spacing={3}
              //   spacing={{ xs: 2, md: 3 }}
              //   columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={12} sm={12} md={6}>
                <Item>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      textAlign: "left",
                    }}
                  >
                    <div>
                      <img style={{ width: "9rem" }} src={books}></img>
                    </div>
                    <div style={{ paddingLeft: "1rem", float: "left" }}>
                      <h4>Fantastical Collection</h4>
                      <p>
                        Whether you're searching for spellbinding sagas, the
                        latest sci-fi thrillers, or ancient tomes of knowledge,
                        our shelves are packed with stories that transport you
                        to other realms.
                      </p>
                    </div>
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
                    <div>
                      <img style={{ width: "9rem" }} src={ebook}></img>
                    </div>
                    <div style={{ paddingLeft: "1rem" }}>
                      <h4>Digital Sorcery</h4>
                      <p>
                        With our magical digital resources, including e-books,
                        audiobooks, and mystical databases, you can summon
                        knowledge with just a few clicks—no wizard's staff
                        required!
                      </p>
                    </div>
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
                    <div>
                      <img style={{ width: "9rem" }} src={events}></img>
                    </div>
                    <div style={{ paddingLeft: "1rem" }}>
                      <h4>Enchanted Events</h4>
                      <p>
                        From spellbinding author talks and wizarding workshops
                        to dragon-taming story hours for kids, there's always
                        something enchanting happening at NerdVana
                      </p>
                    </div>
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
                    <div>
                      <img style={{ width: "9rem" }} src={castel}></img>
                    </div>
                    <div style={{ paddingLeft: "1rem" }}>
                      <h4>Community Castle</h4>
                      <p>
                        Our cozy nooks and grand reading halls are perfect for
                        quiet study, spirited collaboration, or simply escaping
                        into a world of fantasy. Free Wi-Fi is just the cherry
                        on top of our magical sundae.
                      </p>
                    </div>
                  </div>
                  {/* other  */}
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default About;
