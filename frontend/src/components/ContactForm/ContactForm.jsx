import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Send from "../../assets/icon/envoyer.png";
import "./ContactForm.css";
import "./Modal.css";

function ContactForm() {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === "Escape") {
        closeModal();
      }
    }

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_30e59kh", "template_mtt651m", form.current, {
        publicKey: "4rycXc7AP5Mdf7uSg",
      })
      .then(
        () => {
          console.info("SUCCESS!");
          setShowModal(true);
          // Réinitialiser le formulaire après l'envoi réussi
          form.current.reset();
        },
        (error) => {
          console.info("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>NOUS CONTACTER</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-group">
            <input
              type="text"
              name="user_firstname"
              placeholder="Prénom *"
              className="half-width"
              required
            />
            <input
              type="text"
              name="user_lastname"
              placeholder="Nom *"
              className="half-width"
            />
          </div>
          <input
            type="email"
            name="user_email"
            placeholder="Entrez votre adresse e-mail *"
            required
          />
          <textarea name="message" placeholder="Votre message *" />
          <div className="button-container">
            <button type="submit">
              <div className="button" value="Send">
                <div className="button-text">ENVOYER</div>
                <img className="button-icon" src={Send} alt="icon envoyer" />
              </div>
            </button>
          </div>
        </form>
      </div>
      {showModal && (
        <div
          className="dialog-overlay"
          onClick={() => setShowModal(false)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setShowModal(false);
            }
          }}
        >
          <div
            className="dialog-content"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setShowModal(false);
              }
            }}
            tabIndex={0}
            role="button"
          >
            <button type="button" className="dialog-close" onClick={closeModal}>
              X
            </button>
            <div>
              Merci pour votre message ! Nous vous répondrons dès que possible.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
