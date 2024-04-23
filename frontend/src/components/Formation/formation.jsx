import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import du composant Link
import "./Formation.css";
import { useSection } from "../../context/SectionContext";
import { useArticle } from "../../context/ArticleContext";

function Formation({ id }) {
  const sections = useSection();
  const article = useArticle();
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  const sectionSpecify = sections.sections[id];
  let { articles } = article;
  articles = articles.filter(
    (articletheme) => articletheme.id_theme - 1 === id
  );

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  if (!sectionSpecify) {
    return <div>La section avec l'ID {id} n'a pas été trouvée.</div>;
  }

  return (
    <div className="formation">
      <h1>{sectionSpecify.title}</h1>
      {sectionSpecify.content.split("\n").map((paragraph) => (
        <p key={sectionSpecify.id_section}>
          {/* Mettre en gras les caractères spécifiques */}
          {paragraph.split("**").map((text, i) => {
            return i % 2 === 0 ? (
              <span key={sectionSpecify.id_section}>{text}</span>
            ) : (
              <strong key={sectionSpecify.id_section}>{text}</strong>
            );
          })}
        </p>
      ))}
      <div className="title-content">
        <h2 className="title">{sectionSpecify.title}</h2>
        <hr className="divider" />
      </div>
      <div className="card-grid">
        {currentArticles.map((articlemap, index) => (
          <Link
            key={articlemap.id_article}
            to={`/article/${articlemap.id_article}`}
            className={`card${index + 1}`}
          >
            <div>
              <img
                className="picture-article"
                src="../src/assets/img.png"
                alt="article"
              />
              <h3 className="card-title">{articlemap.title}</h3>
            </div>
          </Link>
        ))}
      </div>
      <div className="navigation">
        {currentPage !== 1 && (
          <div className="previous">
            <button type="button" onClick={() => paginate(currentPage - 1)}>
              <p>← Articles Précédents</p>
            </button>
          </div>
        )}
        {currentPage !== totalPages && (
          <div className="next">
            <button type="button" onClick={() => paginate(currentPage + 1)}>
              <p>Articles Suivants →</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

Formation.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Formation;
