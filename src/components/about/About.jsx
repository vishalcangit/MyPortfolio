import React, { useEffect, useRef } from "react";
import gmail from "../../img/contact/gmail.png";
import instagram from "../../img/contact/instagram.png";
import linkedIn from "../../img/contact/linkedin.png";
import phone from "../../img/contact/phone.png";
import me from "../../img/me2.png";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <img src={me} alt="me" className="about-me-img"></img>
        <div className="about-contact">
          <a
            href="mailto:vishalsuvarna2000@gmail.com"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={gmail}></img>
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-suvarna-14108a1a0/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={linkedIn}></img>
          </a>
          <a
            href="https://www.instagram.com/vishal_suvarna/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={instagram}></img>
          </a>
          <a href="tel:+917977897796" target={"_blank"} rel="noreferrer">
            <img src={phone}></img>
          </a>
        </div>
      </div>
      <div className="about-right">
        <h1 className="title">About me</h1>
        <div className="about-info">
          Hi I am Vishal Suvarna, a 22 year old Web developer, Space Enthusiast
          living in Mangalore, India. I am a self taught Web Developer who,
          Loves automating daily boring tasks using Javascript, loves developing
          websites and learning new technologies daily which brings efficiency
          and productiity to my workflow. I am always excited to do business
          with like minded people, lets discuss over coffee.
        </div>
      </div>
    </div>
  );
};

export default About;
