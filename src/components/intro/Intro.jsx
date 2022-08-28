import React from "react";
import ME from "../../img/me.png";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-name">Vishal Suvarna</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Self Taught</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">FrontEnd Developer</div>
              <div className="i-title-item">Geek Enthusiast</div>
            </div>
          </div>
          <div className="i-description">
            A hardworking and dedicated team player passionate about
            implementing and launching new projects. Ability to translate
            business requirements into technical solutions. Looking to start my
            career as an entry-level Front-End Developer with a firm driven by
            technology.
          </div>
        </div>
        <div className="scroll">
          <p>Scroll down</p>
          <i class="fas fa-arrow-down"></i>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={ME} className="i-img"></img>
      </div>
    </div>
  );
};

export default Intro;
