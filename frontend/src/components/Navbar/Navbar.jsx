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

  return (
    <div className="Navbar">
      <img src={Logo} alt="Logo La Fabrique" />
      <ul>
        {navbarItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <div className="Lang">FR / EN</div>
    </div>
  );
}
export default Navbar;
