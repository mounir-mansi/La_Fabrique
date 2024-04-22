import { createContext, useContext, useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { hostname } from "../HostnameConnect/Hostname";

const TeamContext = createContext(null);

export function useTeam() {
  return useContext(TeamContext);
}

export function TeamProvider({ children }) {
  const [teamMembers, setTeamMembers] = useState([]);

  const getTeamMembers = async () => {
    try {
      const response = await fetch(`${hostname}/team`);
      if (response.ok) {
        const data = await response.json();
        setTeamMembers(data);
        console.info("data", data);
      } else {
        console.error("Erreur lors de la requête:", response.statusText);
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
    }
  };

  useEffect(() => {
    getTeamMembers();
  }, []); // Utilisez une dépendance vide pour exécuter cette fonction une seule fois après le rendu initial

  const value = useMemo(() => ({ teamMembers, getTeamMembers }), [teamMembers]);

  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>;
}

TeamProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
