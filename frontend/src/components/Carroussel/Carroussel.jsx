import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Carroussel.css";

function Carroussel() {
  const [carroussel, setCarroussel] = useState([]);
  const [articles, setArticles] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCarroussel = async () => {
      try {
        const response = await fetch("http://localhost:5000/carroussel/3");
        if (!response.ok) {
          throw new Error("Failed to fetch carroussel data");
        }
        const data = await response.json();
        setCarroussel(data);
      } catch (error) {
        console.error("Error fetching carroussel data:", error);
      }
    };
    fetchCarroussel();
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:5000/article/last");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);

  // Effet pour gérer le défilement automatique du carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Math.ceil(articles.length / 3) - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, [currentIndex, articles.length]);

  // Gestionnaire d'événements pour le survol d'un élément
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  // Gestionnaire d'événements pour la fin du survol d'un élément
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // Fonction pour raccourcir le contenu de l'article
  const shortenContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return `${content.substring(0, maxLength)}...`;
    }
    return content;
  };

  // Rendu du composant Carrousel
  return (
    <div className="carroussel">
      <div>
        {/* Affichage du titre du carrousel */}
        {carroussel.map((item) => (
          <h2 className="carroussel__title" key={item.id_carroussel}>
            <i>|</i> {item.title}
          </h2>
        ))}
      </div>
      <div className="carroussel__content">
        {/* Bouton précédent */}
        <button
          type="button"
          className="prev-button"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0
                ? Math.ceil(articles.length / 3) - 1
                : prevIndex - 1
            )
          }
        >
          &#10094;
        </button>
        {/* Liste des articles du carrousel */}
        <ul>
          {articles
            .slice(currentIndex * 3, (currentIndex + 1) * 3)
            .map((article, index) => (
              <li
                key={article.id_article}
                onMouseEnter={() => handleMouseEnter(currentIndex * 3 + index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link to={`/article/${article.id_article}`}>
                  <div className="image-container">
                    {/* Affichage de l'image de l'article */}
                    <img src={article.picture} alt="" />
                    {/* Affichage du contenu de l'article au survol */}
                    {hoveredIndex === currentIndex * 3 + index && (
                      <div className="overlay">
                        <h3>{article.title}</h3>
                        <p className="p_carroussel">
                          {shortenContent(article.content, 150)}
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              </li>
            ))}
        </ul>
        {/* Bouton suivant */}
        <button
          type="button"
          className="next-button"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === Math.ceil(articles.length / 3) - 1
                ? 0
                : prevIndex + 1
            )
          }
        >
          &#10095;
        </button>
      </div>
      {/* Indicateurs de pagination */}
      <div className="dots">
        {Array.from({ length: Math.ceil(articles.length / 3) }).map(
          (_, index) => (
            <button
              type="button"
              key={articles.id}
              className={currentIndex === index ? "dot active" : "dot"}
              onClick={() => setCurrentIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setCurrentIndex(index);
                }
              }}
              tabIndex={0}
              aria-label={`Select dot ${index}`}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Carroussel;
