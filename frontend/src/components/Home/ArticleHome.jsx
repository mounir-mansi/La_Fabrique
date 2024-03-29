import React, { useState, useEffect } from "react";

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
    (section) => section.id_section >= 2
  );

  return (
    <div>
      {filteredSections.map((section) => (
        <div key={section.id}>
          <img src={section.picture} className="img" alt="" />
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
}

export default ArticleHome;
