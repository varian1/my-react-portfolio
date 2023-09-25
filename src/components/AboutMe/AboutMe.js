import React from "react";
import { Container, Typography } from "@mui/material";
import "./AboutMe.scss";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/fontawesome-free-solid";

import Profile from "assets/profile.png";

const AboutMe = () => {
  fontawesome.library.add(faAddressBook);
  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="m">
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase",
        }}
      ></Typography>
      <div className="name">
        <img src={Profile} alt="profile_photo" className="img" />
        <h1>Hi I'm Varian</h1>
        {/* <div className="greeting-animation">
          <h1>Hello!</h1>
        </div> */}
        <div className="subtitle">
          <h3>I am a Full stack web developer.</h3>
          <p>
            Having an experience of building Web and Mobile Appplications with
            JavaScript/ ReactJS/ PHP/ React Native and some other libraries and
            frameworks
            <FontAwesomeIcon icon="fa-address-book" />
            {/* <FontAwesomeIcon icon="fa-home" /> */}
          </p>

          <p></p>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
