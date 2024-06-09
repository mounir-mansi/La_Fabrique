// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useArticle } from "../../context/ArticleContext";
// import { useSectionArticle } from "../../context/SectionArticleContext";
// import ArticleNavigation from "./ArticleNavigation";
// import Navbar from "../Navbar/Navbar";
// import "./Article.css";

// function Article() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [dataid, setDataId] = useState(parseInt(id, 10));
//   const { articles, getArticles } = useArticle();
//   const articleSpecify = articles[id - 1];
//   const { sections, getSectionsByArticleId } = useSectionArticle();
//   const [sectionsLoaded, setSectionsLoaded] = useState(false);

//   useEffect(() => {
//     getArticles();
//   }, [getArticles]);

//   useEffect(() => {
//     getSectionsByArticleId(dataid)
//       .then(() => setSectionsLoaded(true))
//       .catch((error) => {
//         console.error("Error loading sections:", error);
//         setSectionsLoaded(false);
//       });
//   }, [dataid, getSectionsByArticleId]);

//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     const date = new Date(dateString);
//     return new Intl.DateTimeFormat("fr-FR", options).format(date);
//   };

//   const goToPreviousArticle = () => {
//     const newId = Math.max(dataid - 1, 1);
//     setDataId(newId);
//     navigate(`/article/${newId}`);
//   };

//   const goToNextArticle = () => {
//     const newId = Math.min(dataid + 1, articles.length);
//     setDataId(newId);
//     navigate(`/article/${newId}`);
//   };

//   return (
//     <div>
//       {articleSpecify && (
//         <div>
//           <div className="Hero-article">
//             <Navbar />
//             <img
//               className="picture-hero-article"
//               src="../src/assets/articlehero.webp"
//               alt="article hero"
//             />
//             <img
//               className="LogoHome"
//               src="../src/assets/Logo/PNG/LOGO-LF-BLANC.png"
//               alt="Hero"
//             />
//           </div>
//           <div className="container-article">
//             <h1>{articleSpecify.title}</h1>
//             {articleSpecify.description.split("\n").map((paragraph) => {
//               const isIndented = paragraph.trim().startsWith("-");
//               const coloredParagraphs = paragraph.split(/\|\|(.*?)\|\|/);

//               return (
//                 <p
//                   key={articleSpecify.id_article}
//                   style={{ marginLeft: isIndented ? "5%" : 0 }}
//                 >
//                   {coloredParagraphs.map((text, i) => {
//                     if (i % 2 !== 0) {
//                       return (
//                         <span
//                           key={articleSpecify.id_article}
//                           className="span-color"
//                         >
//                           <strong>{text}</strong>
//                         </span>
//                       );
//                     }
//                     return (
//                       <span key={articleSpecify.id_article}>
//                         {text
//                           .split("**")
//                           .map((innerText, j) =>
//                             j % 2 === 0 ? (
//                               <span key={articleSpecify.id_article}>
//                                 {innerText}
//                               </span>
//                             ) : (
//                               <strong key={articleSpecify.id_article}>
//                                 {innerText}
//                               </strong>
//                             )
//                           )}
//                       </span>
//                     );
//                   })}
//                 </p>
//               );
//             })}

//             {sectionsLoaded && (
//               <>
//                 {sections.map((section) => (
//                   <div key={section.id_section}>
//                     {section.title && <h2>{section.title}</h2>}
//                     {section.content && <p>{section.content}</p>}
//                   </div>
//                 ))}
//               </>
//             )}

/* <a href={articleSpecify.link}>
              {articleSpecify.link.split("\n").map((paragraph) => (
                <div key={articleSpecify.id_article}>
                  {paragraph}
                  <br />
                </div>
              ))}
            </a> */
//             <br />
//             <br />
//             <div className="content-img">
//               <img
//                 className="picture-article"
//                 src="../src/assets/img.png"
//                 alt="article"
//               />
//             </div>
//             <p>Date : {formatDate(articleSpecify.date)}</p>
//             <ArticleNavigation
//               onPrevious={goToPreviousArticle}
//               previousTitle={articles[dataid - 2]?.title}
//               onNext={goToNextArticle}
//               nextTitle={articles[dataid]?.title}
//               hasPrevious={dataid > 1}
//               hasNext={dataid < articles.length}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Article;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useArticle } from "../../context/ArticleContext";
import { useSectionArticle } from "../../context/SectionArticleContext";
import { useElementList } from "../../context/ElementListContext"; // Importez le contexte ElementListContext
import ArticleNavigation from "./ArticleNavigation";
import Navbar from "../Navbar/Navbar";
import "./Article.css";

function Article() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [dataid, setDataId] = useState(parseInt(id, 10));
  const { articles, getArticles } = useArticle();
  const articleSpecify = articles[id - 1];
  const { sections, getSectionsByArticleId } = useSectionArticle();
  const { elementLists, getElementListsBySectionId } = useElementList(); // Utilisez le contexte ElementListContext
  const [sectionsLoaded, setSectionsLoaded] = useState(false);
  // const memoizedElementLists = useMemo(() => elementLists, [elementLists]);
  console.info("elementLists", elementLists);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  useEffect(() => {
    getSectionsByArticleId(dataid)
      .then(() => setSectionsLoaded(true))
      .catch((error) => {
        console.error("Error loading sections:", error);
        setSectionsLoaded(false);
      });
  }, [dataid, getSectionsByArticleId]);

  useEffect(() => {
    if (sectionsLoaded && sections.length > 0) {
      const sectionIds = sections.map((section) => section.id_section_article);
      sectionIds.forEach((sectionId) => {
        // Utilisation de la méthode find pour vérifier si un élément de la liste d'éléments a le même id_section_article que la section en cours
        const hasElementListForSection = elementLists.find(
          (element) => element.id_section_article === sectionId
        );

        // Vérification si un élément de la liste d'éléments a été trouvé pour la section en cours
        if (!hasElementListForSection) {
          getElementListsBySectionId(sectionId);
        }
      });
    }
  }, [sections, sectionsLoaded, elementLists, getElementListsBySectionId]);

  // useEffect(() => {
  //   if (sectionsLoaded && sections.length > 0) {
  //     const sectionId = sections[0].id_section_article;
  //     getElementListsBySectionId(sectionId);
  //   }
  // }, [sections, sectionsLoaded, getElementListsBySectionId]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fr-FR", options).format(date);
  };

  const goToPreviousArticle = () => {
    const newId = Math.max(dataid - 1, 1);
    setDataId(newId);
    navigate(`/article/${newId}`);
  };

  const goToNextArticle = () => {
    const newId = Math.min(dataid + 1, articles.length);
    setDataId(newId);
    navigate(`/article/${newId}`);
  };
  console.info("ElementLists", elementLists);
  return (
    <div>
      {articleSpecify && (
        <div>
          <div className="Hero-article">
            <Navbar />
            <img
              className="picture-hero-article"
              src="../src/assets/articlehero.webp"
              alt="article hero"
            />
            <img
              className="LogoHome"
              src="../src/assets/Logo/PNG/LOGO-LF-BLANC.png"
              alt="Hero"
            />
          </div>
          <div className="container-article">
            <h1>{articleSpecify.title}</h1>
            {articleSpecify.description.split("\n").map((paragraph) => {
              const isIndented = paragraph.trim().startsWith("-");
              const coloredParagraphs = paragraph.split(/\|\|(.*?)\|\|/);

              return (
                <p
                  key={articleSpecify.id_article}
                  style={{ marginLeft: isIndented ? "5%" : 0 }}
                >
                  {coloredParagraphs.map((text, i) => {
                    if (i % 2 !== 0) {
                      return (
                        <span
                          key={articleSpecify.id_article}
                          className="span-color"
                        >
                          <strong>{text}</strong>
                        </span>
                      );
                    }
                    return (
                      <span key={articleSpecify.id_article}>
                        {text
                          .split("**")
                          .map((innerText, j) =>
                            j % 2 === 0 ? (
                              <span key={articleSpecify.id_article}>
                                {innerText}
                              </span>
                            ) : (
                              <strong key={articleSpecify.id_article}>
                                {innerText}
                              </strong>
                            )
                          )}
                      </span>
                    );
                  })}
                </p>
              );
            })}

            {sectionsLoaded ? (
              sections.map((section) => {
                // Filtrer et limiter les éléments correspondant à l'identifiant de section de la section actuelle
                // const matchingElements = elementLists.filter(
                //   (element) =>
                //     element.id_section_article === section.id_section_article
                // ); // Remplacez n par le nombre d'éléments que vous souhaitez afficher pour chaque section
                return (
                  <div key={section.id_section_article}>
                    <h2>{section.title}</h2>
                    <h3>{section.subtitle}</h3>
                    <h4>{section.h3_title}</h4>
                    <p>{section.content}</p>
                    <ul className="list">
                      {elementLists
                        .filter(
                          (element) =>
                            element.id_section_article ===
                            section.id_section_article
                        )
                        .map((element) => (
                          <li key={element.id_element}>
                            {element.content
                              .split("**")
                              .map((text, index) =>
                                index % 2 === 0 ? (
                                  <span key={element.id_element}>{text}</span>
                                ) : (
                                  <strong key={element.id_element}>
                                    {text}
                                  </strong>
                                )
                              )}
                            <br />
                            <br />
                          </li>
                        ))}
                    </ul>
                  </div>
                );
              })
            ) : (
              <p>Chargement...</p>
            )}

            <br />
            <br />
            <div className="content-img">
              <img
                className="picture-article"
                src="../src/assets/img.png"
                alt="article"
              />
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
        </div>
      )}
    </div>
  );
}

export default Article;
