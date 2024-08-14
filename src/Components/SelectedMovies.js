// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../Assets/MovieList.css';

// const SelectedMovies = () => {
//   const [addedMovies, setAddedMovies] = useState([]);

//   useEffect(() => {
//     const savedMovies = JSON.parse(localStorage.getItem('addedMovies')) || [];
//     setAddedMovies(savedMovies);
//   }, []);

//   const removeMovie = (movieId) => {
//     const updatedMovies = addedMovies.filter(movie => movie.id !== movieId);
//     setAddedMovies(updatedMovies);
//     localStorage.setItem('addedMovies', JSON.stringify(updatedMovies));
//   };

//   return (
//     <div className='Movielist'>
//     <div className='scroll'>
//       <h2 className='h2title'>My List</h2>
//       <div className="movie-list-container">
//         {addedMovies.map((movie) => (
//           <div className="movie-card" key={movie.id}>
//             <img
//               src={movie.image ? movie.image : 'default_image_url'}
//               alt={movie.title}
//               className="movie-image"
//             />
//             <div className="movie-info">
//               <h4>{movie.title}</h4>
//               <p>⭐ {movie.rating || 'N/A'}</p>
//               <button
//                 className="remove-from-list-btn"
//                 onClick={() => removeMovie(movie.id)}
//               >
//                 Remove from List
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Link to="/Movies" className="back-link">Back to Trending</Link>
//     </div>
//     </div>
//   );
// };

// export default SelectedMovies;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/MovieList.css';

const SelectedMovies = () => {
  const [addedMovies, setAddedMovies] = useState([]);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('addedMovies')) || [];
    setAddedMovies(savedMovies);
  }, []);

  const removeMovie = (movieId) => {
    const updatedMovies = addedMovies.filter(movie => movie.id !== movieId);
    setAddedMovies(updatedMovies);
    localStorage.setItem('addedMovies', JSON.stringify(updatedMovies));
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', padding: '20px' }}>
      <div className='scroll'>
        <h2 className='h2title'>My List</h2>
        <div className="movie-list-container">
          {addedMovies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                src={movie.image ? movie.image : 'default_image_url'}
                alt={movie.title}
                className="movie-image"
              />
              <div className="movie-info">
                <h4>{movie.title}</h4>
                <p>⭐ {movie.rating || 'N/A'}</p>
                <button
                  className="remove-from-list-btn"
                  onClick={() => removeMovie(movie.id)}
                >
                  Remove from List
                </button>
              </div>
            </div>
          ))}
        </div>
        <Link to="/Movies" className="back-link">Back to Trending</Link>
      </div>
    </div>
  );
};

export default SelectedMovies;
