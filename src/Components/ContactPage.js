import React from "react";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import "../Styles/ContactPage.css";
import { ReactComponent as PhoneIcon } from "../Assets/Phone_Logo.svg";
import { ReactComponent as MailIcon } from "../Assets/Email_Logo.svg";
import { ReactComponent as LinkedInIcon } from "../Assets/Linkedin_Logo.svg";

function Contact (){
    const formRef = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_su4tphs',       
        'template_rfzsu9k',      
        formRef.current,
        'r3mU4UaqJNhNlz_2_'        
      )
      .then((result) => {
        alert("Message sent successfully!");
        formRef.current.reset(); 
      }, (error) => {
        alert("Failed to send message. Please try again.");
      });
    };

  return (
    <div id="ContactPage">
      <h2 className="contact-title">
        Contact <span>Me</span>
      </h2>
      <div className="contact-content">
        <div className="contact-icons">
            
          <PhoneIcon className="icon" /><p> +27 61 442 1084</p>

          <MailIcon className="icon" />
          <p>TshepisoMarutlulle@icloud.com</p>
          <LinkedInIcon className="icon" />
          
          
        </div>
        <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
      <div className="form-row">
        <input type="text" placeholder="First Name" name="firstName" required />
        <input type="text" placeholder="Last Name" name="lastName" required />
      </div>
      <div className="form-row">
        <input type="text" placeholder="Phone" name="phone" required />
        <input type="text" placeholder="Subject" name="subject" required />
      </div>
      <input type="email" placeholder="Email" name="email" required />
      <textarea placeholder="Message" name="message" required></textarea>
      <button type="submit">Submit</button>
    </form>
      </div>
    </div>
  );
};

export default Contact;
