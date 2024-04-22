import React from "react";
import "./ContactScreen.css";
import ContactInfo from "../../components/Contact/ContactInfo";
import Navbar from "../../components/Navbar/Navbar";
import ContactForm from "../../components/ContactForm/ContactForm";

function Contact() {
  return (
    <div>
      <Navbar />
      <ContactInfo />
      <ContactForm />
    </div>
  );
}

export default Contact;
