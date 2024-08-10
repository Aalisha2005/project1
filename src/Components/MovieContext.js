import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const addMovieToList = (movie) => {
    setSelectedMovies((prevMovies) => [...prevMovies, movie]);
  };

  return (
    <MovieContext.Provider value={{ selectedMovies, addMovieToList }}>
      {children}
    </MovieContext.Provider>
  );
};
