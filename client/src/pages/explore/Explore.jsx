import React, { useState } from "react";
import placeholderImage from "../../assets/placeholderImage.jpeg";
import Loader from "../../components/Loader/Loader";
import "./Explore.css";

const Explore = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = "9eb26a3455ba45ab87c714937eb39f84";

  const fetchData = async () => {
    setIsLoading(true);
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }
      const data = await response.json();
      setTimeout(() => {
        setIsLoading(false);
        setArticles(data.articles);
      }, 2000);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <h2>Explore News</h2>
      <div className="form-search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter a topic..."
          />
          <button className="button" type="submit">
            Search
          </button>
        </form>
      </div>
      {isLoading && <Loader timeout={2000} setLoading={setIsLoading} />}
      {!isLoading && (
        <div className="articles-container">
          {articles.map((article, index) => (
            <div className="article" key={index}>
              <img
                src={article.urlToImage || placeholderImage}
                alt={article.title}
              />
              <div className="article-details">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <p>Author: {article.author}</p>
                <p>Source: {article.source.name}</p>
                <p>
                  Published: {new Date(article.publishedAt).toLocaleString()}
                </p>
                <a
                  className="btn-grad"
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Explore;
