import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/MovieList.css';

const SelectedMovies = () => {
  const [addedMovies, setAddedMovies] = useState([]);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('addedMovies')) || [];
    setAddedMovies(savedMovies);
  }, []);

  return (
    <div className='scroll'>
      <h2 className='h2title'>My List</h2>
      <div className="movie-list-container">
        {addedMovies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="movie-image"
            />
            <div className="movie-info">
              <h4>{movie.title}</h4>
              <p>⭐ {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/" className="back-link">Back to Trending</Link>
    </div>
  );
};

export default SelectedMovies;
