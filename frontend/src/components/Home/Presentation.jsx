import React, { useState, useEffect } from "react";

function Presentation() {
  const [section, setSection] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/section/1");
        if (!response.ok) {
          throw new Error("Failed to fetch navbar items");
        }
        const data = await response.json();
        setSection(data);
      } catch (error) {
        console.error("Error fetching navbar items:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="presentation">
      <h1> {section.title}</h1>
      <p>{section.content}</p>
      <img src={section.image} alt="presentation" />
    </div>
  );
}

export default Presentation;
