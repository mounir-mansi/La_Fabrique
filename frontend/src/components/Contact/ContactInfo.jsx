import React from "react";
import "./ContactInfo.css";
import { useContact } from "../../context/ContactContext"; // Remplacez le chemin d'accès approprié

function ContactInfo() {
  const { contacts } = useContact();
  console.info({ contacts });

  // Vérifiez d'abord si les contacts sont définis
  if (!contacts || contacts.length === 0) {
    return <div>Aucune information de contact disponible</div>;
  }

  // Utilisez le premier contact de la liste
  const contact = contacts[0];

  const { title, content, phone, email, horaire } = contact;

  return (
    <div className="contact-info">
      <div className="contact-info__image">
        <img className="img" src="../src/assets/contact.png" alt="contact" />
      </div>
      <div className="contact-info__details">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="contact-info__details__item">
          <img
            src="../src/assets/bouton-de-symbole-de-telephone.png"
            alt="contact"
          />
          <span>{phone}</span>
        </div>
        <div className="contact-info__details__item">
          <img src="../src/assets/e-mail.png" alt="contact" />
          <span>{email}</span>
        </div>
        <div className="contact-info__details__item">
          <img src="../src/assets/lhorloge.png" alt="contact" />
          <span>{horaire}</span>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
