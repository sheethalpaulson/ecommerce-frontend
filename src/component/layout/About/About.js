import React from "react";
import "./aboutSection.css";
import { Typography } from "@material-ui/core";
const About = () => {
  return (
    <div className="aboutSection">
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>
        <div>
          <div>
            <Typography><h3>Sheethal Paul</h3></Typography>
            <br/>
            <span>
              Sheethal's Cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
