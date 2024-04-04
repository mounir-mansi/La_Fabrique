// sectionContext.js
import { createContext, useContext, useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { hostname } from "../HostnameConnect/Hostname";

const SectionContext = createContext(null);

export function useSection() {
  return useContext(SectionContext);
}

export function SectionProvider({ children }) {
  const [sections, setSections] = useState([]);

  const getSections = async () => {
    try {
      const response = await fetch(`${hostname}/sections`); // Utilisez le chemin correct pour votre API
      if (response.ok) {
        const data = await response.json();
        setSections(data);
      } else {
        console.error("Erreur lors de la requête:", response.statusText);
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
    }
  };

  useEffect(() => {
    getSections();
  }, []); // Utilisez une dépendance vide pour exécuter cette fonction une seule fois après le rendu initial

  const value = useMemo(() => ({ sections, getSections }), [sections]);

  return (
    <SectionContext.Provider value={value}>{children}</SectionContext.Provider>
  );
}

SectionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
