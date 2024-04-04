// import React from "react";
// import "./Accompagnement.css"; // Importez le fichier CSS pour styliser le composant
// import { useSection } from "../../context/SectionContext"; // Importez le contexte de la section
// import { useArticle } from "../../context/ArticleContext";

// function Accompagnement({ id }) {
//   const sections = useSection();
//   const article = useArticle();
//   console.info({ article });
//   const sectionSpecify = sections.sections[id];
//   let { articles } = article;
//   articles = articles.filter((articletheme) => articletheme.id_theme === 3);

//   // Nombre total d'articles à afficher
//   const totalArticles = articles.length;

//   // Nombre d'articles par ligne
//   const articlesPerRow = 3;

//   // Boucle pour générer les styles CSS des cartes
//   let cardStyles = "";
//   for (let i = 0; i < totalArticles; i++) {
//     const rowStart = Math.floor(i / articlesPerRow) + 1;
//     const rowEnd = rowStart + 1;
//     const colStart = (i % articlesPerRow) * 2 + 1;
//     const colEnd = colStart + 1;

//     // Générer le sélecteur de classe et les styles CSS correspondants pour chaque carte
//     cardStyles += `
//       .card${i + 1} {
//         grid-area: ${rowStart} / ${colStart} / ${rowEnd} / ${colEnd};
//       }
//     `;
//   }

//   console.info(cardStyles);

//   // Si la section avec l'ID spécifié n'est pas trouvée, retournez un message d'erreur
//   if (!sectionSpecify) {
//     return <div>La section avec l'ID {id} n'a pas été trouvée.</div>;
//   }
//   return (
//     <div className="accompaniment">
//       {/* Description */}
//       <p className="description">{sectionSpecify.content}</p>
//       <div className="title-content">
//         <h2 className="title">Nos interventions</h2>
//         <hr className="divider" />
//       </div>
//       {/* Grid de cartes */}
//       <div className="card-grid">
//         {/* Mapping des articles filtrés pour créer une carte pour chaque article */}
//         {articles.map((articlemap, index) => (
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
//     </div>
//   );
// }

// export default Accompagnement;
import React, { useState } from "react";
import PropTypes from "prop-types"; // Importez PropTypes pour définir les types des props
import "./Accompagnement.css"; // Importez le fichier CSS pour styliser le composant
import { useSection } from "../../context/SectionContext"; // Importez le contexte de la section
import { useArticle } from "../../context/ArticleContext";

function Accompagnement({ id }) {
  const sections = useSection();
  const article = useArticle();
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  const sectionSpecify = sections.sections[id];
  let { articles } = article;
  articles = articles.filter((articletheme) => articletheme.id_theme === id);

  // Pagination - Index de début et de fin des articles à afficher sur la page actuelle
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Changement de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Nombre total de pages
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Si la section avec l'ID spécifié n'est pas trouvée, retournez un message d'erreur
  if (!sectionSpecify) {
    return <div>La section avec l'ID {id} n'a pas été trouvée.</div>;
  }

  return (
    <div className="accompagnement">
      {/* Description */}
      <p className="description">{sectionSpecify.content}</p>
      <div className="title-content">
        <h2 className="title">{sectionSpecify.title}</h2>
        <hr className="divider" />
      </div>
      {/* Grid de cartes */}
      <div className="card-grid">
        {/* Mapping des articles filtrés pour créer une carte pour chaque article sur la page actuelle */}
        {currentArticles.map((articlemap, index) => (
          <div className={`card${index + 1}`} key={articlemap.id_article}>
            <img
              className="picture-article"
              src="../src/assets/img.png"
              alt="article"
            />{" "}
            <h3 className="card-title">{articlemap.title}</h3>{" "}
            {/* Utilisez le titre de l'article */}
          </div>
        ))}
      </div>
      {/* Boutons de pagination */}
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
  id: PropTypes.number.isRequired, // Le prop id doit être un nombre et est requis
};

export default Accompagnement;
