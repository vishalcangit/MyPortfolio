import React, { useRef } from "react";
import address from "../../img/address.png";
import email from "../../img/email.png";
import phone from "../../img/phone.png";
import "./contact.css";

const Contact = () => {
  const formRef = useRef();
  const sendEmailHandler = (e) => {
    e.preventDefault();https://certificate.codingninjas.com/view/09ee7e5da7d552ae
  };
  return (
    <div className="contact-container">
      <div className="contact-bg"></div>
      <h1 className="title">Let's get in touch..</h1>
      <div className="contact-wrapper">
        <form ref={formRef} onSubmit={sendEmailHandler}>
          <div className="contact-box">
            <input type="text"></input>
            <span>Enter Name</span>
          </div>
          <div className="contact-box">
            <input type="text"></input>
            <span>Enter email</span>
          </div>
          <div className="contact-box">
            <input type="text"></input>
            <span>Enter ph-number</span>
          </div>
          <div>
            <textarea placeholder="Message" cols="35" rows={5}></textarea>
          </div>
          <button className="send-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
