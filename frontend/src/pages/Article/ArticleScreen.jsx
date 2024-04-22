import React from "react";
import { useParams } from "react-router-dom";
import Article from "../../components/Article/Article";
import "./ArticleScreen.css";
import Footer from "../../components/Footer/Footer/Footer";
import Newsletter from "../../components/Footer/Newsletter/Newsletter";

function ArticleScreen() {
  const { id } = useParams();
  return (
    <div className="screen">
      <Article articleId={id} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ArticleScreen;
