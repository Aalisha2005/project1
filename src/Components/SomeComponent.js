// src/SomeComponent.js
import React from 'react';
import MovieArticle from './MovieArticle.js';
// import '../Assets/Movie.css';
const movie = {
  title: 'Inception',
  director: 'Christopher Nolan',
  rating: 5,
  tags: ['Sci-fi', 'Thriller'],
  description: 'A thief who enters the dreams of others to steal secrets.',
  image: '/images/inception.jpg' // Ensure this path is correct
};

const SomeComponent = () => {
  return (
    <div>
      <MovieArticle movie={movie} />
    </div>
  );
};

export default SomeComponent;
