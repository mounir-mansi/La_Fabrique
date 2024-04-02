import { createContext, useContext, useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { hostname } from "../HostnameConnect/Hostname";

const ArticleContext = createContext(null);

export function useArticle() {
  return useContext(ArticleContext);
}

export function ArticleProvider({ children }) {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const response = await fetch(`${hostname}/article`);
      if (response.ok) {
        const data = await response.json();
        setArticles(data);
      } else {
        console.error("Erreur lors de la requête:", response.statusText);
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []); // Utilisez une dépendance vide pour exécuter cette fonction une seule fois après le rendu initial

  const value = useMemo(() => ({ articles, getArticles }), [articles]);

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
}

ArticleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
