import React from "react";
import css from "../../img/skills/css.png";
import git from "../../img/skills/git.png";
import github from "../../img/skills/github.png";
import html from "../../img/skills/html.png";
import java from "../../img/skills/java.png";
import js from "../../img/skills/javascript.png";
import mongodb from "../../img/skills/mongodb.png";
import nodejs from "../../img/skills/nodejs.png";
import react from "../../img/skills/react.png";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skill-title">Skills</div>
      <div className="skillitem-container">
        <div className="skill-item">
          <img src={html} alt="Skills" />
          <h3>HTML 5</h3>
        </div>
        <div className="skill-item">
          <img src={css} alt="Skills" />
          <h3>CSS</h3>
        </div>
        <div className="skill-item">
          <img src={js} alt="Skills" />
          <h3>Javascript</h3>
        </div>
        <div className="skill-item">
          <img src={react} alt="Skills" />
          <h3>React</h3>
        </div>
        <div className="skill-item">
          <img src={java} alt="Skills" />
          <h3>Java</h3>
        </div>
        <div className="skill-item">
          <img src={mongodb} alt="Skills" />
          <h3>MongoDb</h3>
        </div>
        <div className="skill-item">
          <img src={nodejs} alt="Skills" />
          <h3>NodeJs</h3>
        </div>
        <div className="skill-item">
          <img src={git} alt="Skills" />
          <h3>Git</h3>
        </div>
        <div className="skill-item">
          <img src={github} alt="Skills" />
          <h3>GitHub</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
