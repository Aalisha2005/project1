// src/Components/MovieArticle.js
import React from 'react';
import '../Assets/MovieArticle.css';

const MovieArticle = ({ movie }) => {
  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie-article">
      <h1 className="movie-title">{movie.title}</h1>
      <img src={movie.image} alt={movie.title} className="movie-image" />
      <div className="movie-details">
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Rating:</strong> {movie.rating} / 5</p>
        <p><strong>Description:</strong> {movie.description}</p>
        <div className="movie-tags">
          {movie.tags.map((tag, index) => (
            <span key={index} className={`tag ${tag.toLowerCase()}`}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieArticle;
