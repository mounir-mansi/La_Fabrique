import { createContext, useContext, useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { hostname } from "../HostnameConnect/Hostname";

const SectionArticleContext = createContext(null);

export function useSectionArticle() {
  return useContext(SectionArticleContext);
}

export function SectionArticleProvider({ children }) {
  const [sections, setSections] = useState([]);

  const getSectionsByArticleId = async (articleId) => {
    try {
      const response = await fetch(`${hostname}/article/${articleId}/sections`);
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

  const addSectionToArticle = async (articleId, sectionData) => {
    try {
      const response = await fetch(
        `${hostname}/article/${articleId}/sections`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sectionData),
        }
      );
      if (!response.ok) {
        console.error("Erreur lors de la requête:", response.statusText);
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
    }
  };

  // Ajoutez les fonctions updateSectionOfArticle et deleteSectionOfArticle ici

  useEffect(() => {
    getSectionsByArticleId(); // À modifier selon vos besoins
  }, []); // Utilisez une dépendance vide pour exécuter cette fonction une seule fois après le rendu initial

  const value = useMemo(
    () => ({ sections, getSectionsByArticleId, addSectionToArticle }),
    [sections]
  );

  return (
    <SectionArticleContext.Provider value={value}>
      {children}
    </SectionArticleContext.Provider>
  );
}

SectionArticleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
