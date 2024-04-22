import React from "react";
import "./ContactForm.css";
import Send from "../../assets/icon/envoyer.png";

function ContactForm() {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>NOUS CONTACTER</h1>
        <form>
          <div className="input-group">
            <input
              type="text"
              placeholder="Prénom *"
              className="half-width"
              required
            />
            <input type="text" placeholder="Nom *" className="half-width" />
          </div>
          <input
            type="email"
            placeholder="Entrez votre adresse e-mail *"
            required
          />
          <textarea placeholder="Votre message *" />
          <div className="button-container">
            <button type="submit">
              <div className="button">
                {" "}
                <div className="button-text">ENVOYER </div>{" "}
                <img className="button-icon" src={Send} alt="icon envoyer" />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
