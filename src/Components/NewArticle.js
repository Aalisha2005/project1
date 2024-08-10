// src/components/NewArticle.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Assets/NewsArticle.css';

const NewArticle = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'in',
            category: 'entertainment',
            // language: 'en',
            apiKey: '97a7b067709a4a399f3101aad73419a5'
          }
        });

        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the news articles', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="container">
      <div className="articles">
        {loading ? (
          <p>Loading...</p>
        ) : (
          articles.map((article, index) => (
            <div key={index} className="article">
              {article.urlToImage && (
                <div className="image-placeholder">
                  <img src={article.urlToImage} alt={article.title} />
                </div>
              )}
              <div className="article-content">
                <h2>{article.title}</h2>
                <p>{article.source.name}</p>
                <p>{article.description}</p>
                <p>Published: {new Date(article.publishedAt).toLocaleDateString()}</p>
              </div>
            </div>
          ))
        )}
      </div>
      {/* <div className="side-news">
        <div className="news-item">Page No. 3</div>
        <div className="news-item">Five held, demolitions on over students’ drowning</div>
        <div className="news-item">CBI names Kejriwal in final chargesheet in excise policy case</div>
        <div className="news-item">Heavy inflow into Mettur dam, flood alert issued</div>
        <div className="news-item read-more">READ MORE STORIES</div>
      </div> */}
    </div>
  );
}

export default NewArticle;