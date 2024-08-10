// import React from 'react';
// import { MovieProvider } from './MovieContext';
// import MovieList from './MovieList';
// import SelectedMoviesList from '../Components/SelectedMovieList';

// const MoviePage = () => {
//   return (
//     <MovieProvider>
//       <div>
//         <MovieList />
//         <SelectedMoviesList />
//       </div>
//     </MovieProvider>
//   );
// };

// export default MoviePage;
import React from 'react';
import { MovieProvider } from './MovieContext';
import MovieList from './MovieList';
import SelectedMoviesList from './SelectedMovieList';

const MoviePage = () => {
  return (
    <MovieProvider>
      <div>
        <MovieList />
        <SelectedMoviesList />
      </div>
    </MovieProvider>
  );
};

export default MoviePage;
