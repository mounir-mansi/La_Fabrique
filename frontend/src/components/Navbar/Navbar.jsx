import "./Navbar.css";
import { useEffect, useState } from "react";
import Logo from "../../assets/Logo/PNG/LOGO-LF-BLANC-SOLO.png";

function Navbar() {
  const [navbarItems, setNavbarItems] = useState([]);

  useEffect(() => {
    const fetchNavbarItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/navbar");
        if (!response.ok) {
          throw new Error("Failed to fetch navbar items");
        }
        const data = await response.json();
        setNavbarItems(data);
      } catch (error) {
        console.error("Error fetching navbar items:", error);
      }
    };

    fetchNavbarItems();
  }, []);

  // Mappage des ID aux chemins correspondants
  const idToPathMap = {
    1: "/qui-sommes-nous",
    2: "/intervention-et-animation",
    3: "/formation",
    4: "/accompagnement-au-portage-de-projet",
    5: "/contact",
    6: "https://google.fr",
  };

  // Fonction pour générer les chemins en fonction des ID
  const generatePath = (id) => idToPathMap[id] || "/"; // Par défaut, renvoie "/" si l'ID n'est pas trouvé

  return (
    <div className="Navbar">
      <a href="/">
        <img src={Logo} alt="Logo La Fabrique" />
      </a>
      <ul>
        {navbarItems.map((item) => (
          <li key={item.id_navbar}>
            <a href={generatePath(item.id_navbar)}>{item.title.trim()}</a>
          </li>
        ))}
      </ul>
      <div className="Lang">FR / EN</div>
    </div>
  );
}

export default Navbar;
