import React, { useState, useEffect } from "react";
import "./ArticleHome.css";

function ArticleHome() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/sections");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSections(data);
      } catch (error) {
        console.error("Error fetching section data:", error);
      }
    };
    fetchData();
  }, []);

  // Filtrer les sections à partir de l'ID 2
  const filteredSections = sections.filter(
    (section) => section.id_section <= 3
  );

  return (
    <div className="article-home">
      {filteredSections.map((section, x) => (
        <div
          key={section.id}
          className={x % 2 === 0 ? "article-even" : "article-odd"}
        >
          <div className="section__image">
            <img src={section.picture} className="img" alt="" />
          </div>
          <div className="section__content">
            <h2>{section.title}</h2>
            {section.content && (
              <>
                {section.content
                  .substring(0, 700)
                  .split("\n")
                  .map((paragraph, y) => {
                    // N'afficher que les trois premiers paragraphes
                    if (y >= 1) return null;

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
        </div>
      ))}
    </div>
  );
}

export default ArticleHome;
