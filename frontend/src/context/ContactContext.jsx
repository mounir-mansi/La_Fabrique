import { createContext, useContext, useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { hostname } from "../HostnameConnect/Hostname";

const ContactContext = createContext(null);

export function useContact() {
  return useContext(ContactContext);
}

export function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    try {
      const response = await fetch(`${hostname}/contact`);
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
        console.info(data);
      } else {
        console.error("Erreur lors de la requête:", response.statusText);
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []); // Utilisez une dépendance vide pour exécuter cette fonction une seule fois après le rendu initial

  const value = useMemo(() => ({ contacts, getContacts }), [contacts]);

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
}

ContactProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
