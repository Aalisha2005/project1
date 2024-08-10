import React from 'react';
import '../Assets/Article.css';
import '../Components/Navbar.js';
import Navbar from '../Components/Navbar.js';

const Article = () => {
  const recentNews = [
    { id: 1, title: "Recent News 1", description: "Description for recent news 1", image: "path/to/recent1.jpg" },
    { id: 2, title: "Recent News 2", description: "Description for recent news 2", image: "path/to/recent2.jpg" },
    { id: 3, title: "Recent News 3", description: "Description for recent news 3", image: "path/to/recent3.jpg" },
  ];

  const trendingNews = [
    { id: 1, title: "Trending News 1", description: "Description for trending news 1", image: "path/to/trending1.jpg" },
    { id: 2, title: "Trending News 2", description: "Description for trending news 2", image: "path/to/trending2.jpg" },
    { id: 3, title: "Trending News 3", description: "Description for trending news 3", image: "path/to/trending3.jpg" },
  ];

  return (
    <div className="news-container">
      <Navbar/>
      <section className="news-section">
        <h2>Recent News</h2>
        <div className="news-list">
          {recentNews.map(news => (
            <div key={news.id} className="news-item">
              <img src={news.image} alt={news.title} className="news-image" />
              <div className="news-content">
                <h3>{news.title}</h3>
                <p>{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="news-section">
        <h2>Trending News</h2>
        <div className="news-list">
          {trendingNews.map(news => (
            <div key={news.id} className="news-item">
              <img src={news.image} alt={news.title} className="news-image" />
              <div className="news-content">
                <h3>{news.title}</h3>
                <p>{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Article;