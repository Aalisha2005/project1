import React from 'react';
import '../Assets/MovieGrid.css';

function MovieCard({ movie, onClick }) {
  return (
    <div className="movie-card1" onClick={() => onClick(movie)}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="movie-info">
        <h2>{movie.title}</h2>
      </div>
    </div>
  );
}

export default MovieCard;
