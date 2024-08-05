import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id ="about">
      <h2>About Me</h2>
      <p>Hello! I'm a passionate web developer with a love for creating interactive and user-friendly websites. My journey in web development has been incredibly rewarding, and I'm always eager to learn new technologies and improve my skills.
      </p>
      <img src={image} alt="I made this" />

    </div>
  )
}

export default About;
