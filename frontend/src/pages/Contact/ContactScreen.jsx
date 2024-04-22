import React from "react";
import "./ContactScreen.css";
import ContactInfo from "../../components/Contact/ContactInfo";
import Navbar from "../../components/Navbar/Navbar";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer/Footer";
import Newsletter from "../../components/Footer/Newsletter/Newsletter";

function Contact() {
  return (
    <div className="ContactScreen">
      <Navbar />
      <ContactInfo />
      <ContactForm />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Contact;
