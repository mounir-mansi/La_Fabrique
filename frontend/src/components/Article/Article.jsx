// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useArticle } from "../../context/ArticleContext";
// import ArticleNavigation from "./ArticleNavigation";
// import "./Article.css";

// function Article() {
//   const data = useParams();
//   const [dataid, setDataId] = useState(parseInt(data.id, 10));
//   const { articles, getArticles } = useArticle();
//   const articleSpecify = articles[dataid - 1];

//   useEffect(() => {
//     getArticles();
//   }, [getArticles]);

//   // Formatage de la date en français
//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     const date = new Date(dateString);
//     return new Intl.DateTimeFormat("fr-FR", options).format(date);
//   };
//   const goToPreviousArticle = () => {
//     const newId = Math.max(dataid - 1, 1);
//     setDataId(newId);
//   };

//   const goToNextArticle = () => {
//     const newId = Math.min(dataid + 1, articles.length);
//     setDataId(newId);
//   };

//   return (
//     <div>
//       {articleSpecify && (
//         <div>
//           <h2>{articleSpecify.title}</h2>
//           <p>{articleSpecify.content}</p>
//           <a href={articleSpecify.link}>Lien</a>
//           <div className="content-img">
//             <img className="img" src="../src/assets/img.png" alt="rrr" />
//           </div>
//           <p>Date : {formatDate(articleSpecify.date)}</p>
//           <ArticleNavigation
//             onPrevious={goToPreviousArticle}
//             previousTitle={articles[dataid - 2]?.title} // Titre de l'article précédent
//             onNext={goToNextArticle}
//             nextTitle={articles[dataid]?.title} // Titre de l'article suivant
//             hasPrevious={dataid > 1} // Masque le bouton "Précédent" lorsque dataid est égal à 1
//             hasNext={dataid < articles.length} // Masque le bouton "Suivant" lorsque dataid est égal à la longueur des articles
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Article;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importer useNavigate
import { useArticle } from "../../context/ArticleContext";
import ArticleNavigation from "./ArticleNavigation";
import "./Article.css";

function Article() {
  const { id } = useParams(); // Utiliser useParams pour obtenir l'ID de l'URL
  const navigate = useNavigate(); // Utiliser useNavigate pour la navigation

  const [dataid, setDataId] = useState(parseInt(id, 10)); // Utiliser id directement depuis useParams
  const { articles, getArticles } = useArticle();
  const articleSpecify = articles[dataid - 1];

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fr-FR", options).format(date);
  };

  const goToPreviousArticle = () => {
    const newId = Math.max(dataid - 1, 1);
    setDataId(newId);
    navigate(`/article/${newId}`); // Utiliser navigate pour changer l'URL
  };

  const goToNextArticle = () => {
    const newId = Math.min(dataid + 1, articles.length);
    setDataId(newId);
    navigate(`/article/${newId}`); // Utiliser navigate pour changer l'URL
  };

  return (
    <div>
      {articleSpecify && (
        <div>
          <h2>{articleSpecify.title}</h2>
          <p>{articleSpecify.content}</p>
          <a href={articleSpecify.link}>{articleSpecify.link}</a>
          <br />
          <br />
          <div className="content-img">
            <img className="img" src="../src/assets/img.png" alt="rrr" />
          </div>
          <p>Date : {formatDate(articleSpecify.date)}</p>
          <ArticleNavigation
            onPrevious={goToPreviousArticle}
            previousTitle={articles[dataid - 2]?.title}
            onNext={goToNextArticle}
            nextTitle={articles[dataid]?.title}
            hasPrevious={dataid > 1}
            hasNext={dataid < articles.length}
          />
        </div>
      )}
    </div>
  );
}

export default Article;
