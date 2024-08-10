// src/components/MovieNews.js
import React from 'react';
import MovieCard from './MovieCard';
import '../Assets/Movieews.css';

const movies = [
  {
    image: 'image_url_1', // Replace with actual image URL or import the image
    title: "SINCLAIR'S RULE",
    description: 'Tempore a sunt quasi. Velit aliquid nobis non fugit voluptates.',
    rating: '7.6'
  },
  {
    image: 'image_url_2', // Replace with actual image URL or import the image
    title: 'ADDISON',
    description: 'Ipsa molestiae harum quod sed qui ipsa et quaerat.',
    rating: '10.0'
  },
  {
    image: 'image_url_3', // Replace with actual image URL or import the image
    title: 'BEAUTY AND THE BOOKKEEPER',
    description: 'Stay up-to-date with the most popular and insightful movie reviews.',
    rating: '9.8'
  },
  {
    image: 'image_url_4', // Replace with actual image URL or import the image
    title: 'MOVIE TITLE 4',
    description: 'Description for the fourth movie.',
    rating: '8.5'
  },
  // Add more movie objects as needed
];

const MovieNews = () => {
  return (
    <div className="movie-news">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          image={movie.image}
          title={movie.title}
          description={movie.description}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

export default MovieNews;
