import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useArticle } from "../../context/ArticleContext";
import ArticleNavigation from "./ArticleNavigation";
import Navbar from "../Navbar/Navbar";
import "./Article.css";

function Article() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [dataid, setDataId] = useState(parseInt(id, 10));
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
    navigate(`/article/${newId}`);
  };

  const goToNextArticle = () => {
    const newId = Math.min(dataid + 1, articles.length);
    setDataId(newId);
    navigate(`/article/${newId}`);
  };

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
            <h1>{articleSpecify.title}</h1>
          </div>
          <div className="container-article">
            <p>{articleSpecify.content}</p>
            <a href={articleSpecify.link}>{articleSpecify.link}</a>
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
