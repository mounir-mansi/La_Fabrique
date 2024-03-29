import "./Hero.css";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";

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
  const defaultImage = "https://i.ibb.co/yXRg0WQ/peakpx.jpg";

  return (
    <div
      className="Hero"
      style={{
        backgroundImage: heroData
          ? `url(${heroData.picture || defaultImage})`
          : `url(${defaultImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Navbar />{" "}
      {window.location.pathname === "/" && (
        <img className="LogoHome" src={logo} alt="Hero" />
      )}
      {heroData && <h1>{heroData.title}</h1>}
    </div>
  );
}

Hero.propTypes = {
  id: PropTypes.number.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Hero;
