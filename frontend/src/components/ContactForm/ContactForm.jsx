import { useState } from "react";
import { useForm } from "@formspree/react";

import Send from "../../assets/icon/envoyer.png";
import "./ContactForm.css";
import "./Modal.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("mzbnyovr");
  const [showModal, setShowModal] = useState(false);

  if (state.succeeded) {
    return (
      <div>
        {showModal && (
          <dialog
            className="dialog-overlay"
            onClose={() => setShowModal(false)}
          >
            <div className="dialog-content">
              <button
                type="button"
                className="dialog-close"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
              <div>
                Merci pour votre message ! Nous vous répondrons dès que
                possible.
              </div>
            </div>
          </dialog>
        )}
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>NOUS CONTACTER</h1>
        <form
          action="https://formspree.io/f/mzbnyovr"
          method="POST"
          onSubmit={(e) => {
            handleSubmit(e);
            setShowModal(true);
          }}
        >
          <div className="input-group">
            <input
              type="text"
              placeholder="Prénom *"
              className="half-width"
              name="prenom"
              required
            />
            <input
              type="text"
              placeholder="Nom *"
              className="half-width"
              name="nom"
            />
          </div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Entrez votre adresse e-mail *"
            required
          />
          <textarea id="message" name="message" placeholder="Votre message *" />
          <div className="button-container">
            <button className="submit-button" type="submit">
              <div className="button">
                <div className="button-text">ENVOYER</div>
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
