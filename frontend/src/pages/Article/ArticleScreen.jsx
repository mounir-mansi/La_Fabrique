import React from "react";
import { useParams } from "react-router-dom";
import Article from "../../components/Article/Article";
import "./ArticleScreen.css";

function ArticleScreen() {
  const { id } = useParams();
  return (
    <div className="screen">
      <Article articleId={id} />
    </div>
  );
}

export default ArticleScreen;
