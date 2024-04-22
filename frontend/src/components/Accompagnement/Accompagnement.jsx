// import React, { useState } from "react";
// import PropTypes from "prop-types"; // Importez PropTypes pour définir les types des props
// import "./Accompagnement.css"; // Importez le fichier CSS pour styliser le composant
// import { useSection } from "../../context/SectionContext"; // Importez le contexte de la section
// import { useArticle } from "../../context/ArticleContext";

// function Accompagnement({ id }) {
//   const sections = useSection();
//   const article = useArticle();
//   const [currentPage, setCurrentPage] = useState(1);
//   const articlesPerPage = 9;

//   const sectionSpecify = sections.sections[id];
//   let { articles } = article;
//   articles = articles.filter((articletheme) => articletheme.id_theme === id);

//   // Pagination - Index de début et de fin des articles à afficher sur la page actuelle
//   const indexOfLastArticle = currentPage * articlesPerPage;
//   const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
//   const currentArticles = articles.slice(
//     indexOfFirstArticle,
//     indexOfLastArticle
//   );

//   // Changement de page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Nombre total de pages
//   const totalPages = Math.ceil(articles.length / articlesPerPage);

//   // Si la section avec l'ID spécifié n'est pas trouvée, retournez un message d'erreur
//   if (!sectionSpecify) {
//     return <div>La section avec l'ID {id} n'a pas été trouvée.</div>;
//   }

//   return (
//     <div className="accompagnement">
//       {/* Description */}
//       <p className="description">{sectionSpecify.content}</p>
//       <div className="title-content">
//         <h2 className="title">{sectionSpecify.title}</h2>
//         <hr className="divider" />
//       </div>
//       {/* Grid de cartes */}
//       <div className="card-grid">
//         {/* Mapping des articles filtrés pour créer une carte pour chaque article sur la page actuelle */}
//         {currentArticles.map((articlemap, index) => (
//           <div className={`card${index + 1}`} key={articlemap.id_article}>
//             <img
//               className="picture-article"
//               src="../src/assets/img.png"
//               alt="article"
//             />{" "}
//             <h3 className="card-title">{articlemap.title}</h3>{" "}
//             {/* Utilisez le titre de l'article */}
//           </div>
//         ))}
//       </div>
//       {/* Boutons de pagination */}
//       <div className="navigation">
//         {currentPage !== 1 && (
//           <div className="previous">
//             <button type="button" onClick={() => paginate(currentPage - 1)}>
//               <p>← Articles Précédents</p>
//             </button>
//           </div>
//         )}
//         {currentPage !== totalPages && (
//           <div className="next">
//             <button type="button" onClick={() => paginate(currentPage + 1)}>
//               <p>Articles Suivants →</p>
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// Accompagnement.propTypes = {
//   id: PropTypes.number.isRequired, // Le prop id doit être un nombre et est requis
// };

// export default Accompagnement;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Importez le composant Link
import "./Accompagnement.css";
import { useSection } from "../../context/SectionContext";
import { useArticle } from "../../context/ArticleContext";

function Accompagnement({ id }) {
  const sections = useSection();
  const article = useArticle();
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  const sectionSpecify = sections.sections[id];
  let { articles } = article;
  articles = articles.filter((articletheme) => articletheme.id_theme === id);

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
    <div className="accompagnement">
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
            {" "}
            {/* Utilisez Link autour de la carte */}
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

Accompagnement.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Accompagnement;
