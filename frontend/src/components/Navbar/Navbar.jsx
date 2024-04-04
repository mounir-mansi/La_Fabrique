import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo/PNG/LOGO-LF-BLANC-SOLO.png";
import "./Navbar.css";

function Navbar() {
  const [navbarItems, setNavbarItems] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      // Vérifie la position de défilement verticale
      if (window.scrollY > 0) {
        setIsScrolled(true); // Si le défilement est vers le bas, active la classe de défilement
      } else {
        setIsScrolled(false); // Sinon, désactive la classe de défilement
      }
    };

    // Ajoute un écouteur d'événements pour gérer le défilement
    window.addEventListener("scroll", handleScroll);

    // Nettoye l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const idToPathMap = {
    1: "/qui-sommes-nous",
    2: "/intervention-et-animation",
    3: "/formation",
    4: "/accompagnement-au-portage-de-projet",
    5: "/contact",
    6: "https://google.fr",
  };

  const generatePath = (id) => idToPathMap[id] || "/";

  return (
    <div className={`Navbar${isScrolled ? " scrolled" : ""}`}>
      <div className="Navbar__content">
        <a href="/">
          <img src={Logo} alt="Logo La Fabrique" />
        </a>
        <ul>
          {navbarItems.map((item) => (
            <li key={item.id_navbar}>
              <a
                href={generatePath(item.id_navbar)}
                target={item.id_navbar === 6 ? "_blank" : "_self"}
                rel={item.id_navbar === 6 ? "noreferrer" : undefined}
              >
                {item.title.trim()} |
              </a>
            </li>
          ))}
        </ul>
        <div className="Language">
          <div className="Lang">
            <a href="/">FR </a>
          </div>
          {/* <div style={{ margin: "0 0.5em" }}> | </div> */}
          <div className="Lang">
            <a href="/"> EN</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
