import "./Hero.css";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Hero({ id, logo }) {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/hero/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch hero data");
        }
        const data = await response.json();

        console.info("Hero data as JSON:", JSON.stringify(data));

        setHeroData(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchData();
  }, [id]); // Effectue la requête à chaque changement de l'ID

  return (
    <div className="Hero">
      {" "}
      {window.location.pathname === "/" && (
        <img className="LogoHome" src={logo} alt="Hero" />
      )}
      {heroData && <h1>{heroData.title}</h1>}
    </div>
  );
}

Hero.propTypes = {
  id: PropTypes.number.isRequired, // Type de l'ID
  logo: PropTypes.string.isRequired, // Type de l'image
};

export default Hero;
