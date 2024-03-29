import React from "react";
import "./ContactScreen.css";
import ContactInfo from "../../components/Contact/ContactInfo";
import Navbar from "../../components/Navbar/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="screen">
        <ContactInfo />
      </div>
    </div>
  );
}

export default Contact;
