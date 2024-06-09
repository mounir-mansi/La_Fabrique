import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { hostname } from "../HostnameConnect/Hostname";

const ElementListContext = createContext(null);

export function useElementList() {
  return useContext(ElementListContext);
}

export function ElementListProvider({ children }) {
  const [elementLists, setElementLists] = useState([]);

  const getElementListsBySectionId = async (sectionId) => {
    try {
      const response = await fetch(
        `${hostname}/section/${sectionId}/elementslist`
      );
      if (response.ok) {
        const newData = await response.json();
        setElementLists((prevElementLists) => [
          ...prevElementLists,
          ...newData,
        ]);
      } else {
        console.error("Erreur lors de la requête:", response.statusText);
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
    }
  };

  const value = useMemo(
    () => ({ elementLists, getElementListsBySectionId }),
    [elementLists]
  );
  return (
    <ElementListContext.Provider value={value}>
      {children}
    </ElementListContext.Provider>
  );
}

ElementListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
