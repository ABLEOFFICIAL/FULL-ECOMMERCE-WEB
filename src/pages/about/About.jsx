import React from "react";
import Story from "./Story";
import Sales from "./Sales";
import Board from "./Board";
import Services from "../home/Services";

const About = () => {
  return (
    <div className="px-3 md:px-0">
      <Story />
      <Sales />
      <Board />
      <Services />
    </div>
  );
};

export default About;
