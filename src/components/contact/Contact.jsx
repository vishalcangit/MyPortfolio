import emailjs from "emailjs-com";
import React, { useRef } from "react";
import address from "../../img/address.png";
import email from "../../img/email.png";
import phone from "../../img/phone.png";
import "./contact.css";

const Contact = () => {
  const formRef = useRef();
  const sendEmailHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2e87tpm",
        "template_0laxcsn",
        formRef.current,
        "0TQ-Qs1mB1BAZiRp5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-container">
      <div className="contact-bg"></div>
      <h1 className="title">Let's get in touch..</h1>
      <div className="contact-wrapper">
        <form ref={formRef} onSubmit={sendEmailHandler}>
          <div className="contact-box">
            <input type="text" name="user_name"></input>
            <span>Enter Name</span>
          </div>
          <div className="contact-box">
            <input type="text" name="user_email"></input>
            <span>Enter email</span>
          </div>
          <div className="contact-box">
            <input type="text" name="user_phone"></input>
            <span>Enter ph-number</span>
          </div>
          <div>
            <textarea
              placeholder="Message"
              name="user_message"
              cols={30}
              rows={5}
            ></textarea>
          </div>
          <button className="send-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
