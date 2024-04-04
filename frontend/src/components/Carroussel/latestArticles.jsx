import React, { useState, useEffect } from "react";

function LatestArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/article/last");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="latestArticles">
      <h2>Latest Articles</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id_article}>
            <img src={article.picture} alt="" />
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatestArticles;
