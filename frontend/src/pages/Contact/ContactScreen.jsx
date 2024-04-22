import React from "react";
import "./ContactScreen.css";
import ContactInfo from "../../components/Contact/ContactInfo";
import Navbar from "../../components/Navbar/Navbar";
import FormulaireContact from "../../components/FormulaireContact/FormulaireContact";

function Contact() {
  return (
    <div>
      <Navbar />
      <ContactInfo />
      <FormulaireContact />
    </div>
  );
}

export default Contact;
