import { createContext, useContext, useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { hostname } from "../HostnameConnect/Hostname";

const HeroContext = createContext(null);

export function useHero() {
  return useContext(HeroContext);
}

export function HeroProvider({ children }) {
  const [heros, setHeros] = useState([]);

  const getHeros = async () => {
    try {
      const response = await fetch(`${hostname}/hero`);
      if (response.ok) {
        const data = await response.json();
        setHeros(data);
      } else {
        console.error("Erreur lors de la requête:", response.statusText);
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
    }
  };

  useEffect(() => {
    getHeros();
  }, []); // Utilisez une dépendance vide pour exécuter cette fonction une seule fois après le rendu initial

  const value = useMemo(() => ({ heros, getHeros }), [heros]);

  return <HeroContext.Provider value={value}>{children}</HeroContext.Provider>;
}

HeroProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
