import React, { useState, useEffect } from "react";
import "./Presentation.css";

function Presentation() {
  const [section, setSection] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/sections/1");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSection(data);
      } catch (error) {
        console.error("Error fetching section data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="presentation">
      <h1>{section.title}</h1>
      {section.content && (
        <>
          {section.content
            .substring(0, 1000)
            .split("\n")
            .map((paragraph, z) => {
              // N'afficher que les trois premiers paragraphes
              if (z >= 4) return null;

              return (
                <p key={section.id_section}>
                  {/* Étape 3: Mettre en gras ce qu'il faut mettre en gras */}
                  {paragraph.split("**").map((text, i) =>
                    i % 2 === 0 ? (
                      // Texte normal
                      <span key={section.id_section}>{text}</span>
                    ) : (
                      // Texte en gras
                      <strong key={section.id_section}>{text}</strong>
                    )
                  )}
                </p>
              );
            })}
          <a href={section.route}>En savoir plus...</a>
        </>
      )}
    </div>
  );
}

export default Presentation;
