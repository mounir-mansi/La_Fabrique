import React from "react";
import "./ContactScreen.css";
import ContactInfo from "../../components/Contact/ContactInfo";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="screen">
        <ContactInfo />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
