// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../Assets/MovieList.css';

// const TMDB_API_KEY = 'beafc909657c51fe414a76fba559786e'; // Replace with your TMDb API key
// const TMDB_API_URL = 'https://api.themoviedb.org/3/movie/popular';

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(`${TMDB_API_URL}?api_key=${TMDB_API_KEY}`);
//         setMovies(response.data.results.slice(0, 15)); // Limit to 18 movies
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   return (
//     <div className='scroll'>
//       <h2 className='h2title'>Trending</h2>
//     <div className="movie-list-container">
//       {movies.map((movie) => (
//         <div className="movie-card" key={movie.id}>
//           <img
//             src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//             alt={movie.title}
//             className="movie-image"
//           />
//           <div className="movie-info">
//             <h4>{movie.title}</h4>
//             <p>⭐ {movie.vote_average}</p>
//             <button className="add-to-list-btn">Add to List</button>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default MovieList;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../Assets/MovieList.css';

// const TMDB_API_KEY = 'beafc909657c51fe414a76fba559786e'; // Replace with your TMDb API key
// const TMDB_API_URL = 'https://api.themoviedb.org/3/movie/popular';

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);
//   const [addedMovies, setAddedMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(`${TMDB_API_URL}?api_key=${TMDB_API_KEY}`);
//         setMovies(response.data.results.slice(0, 15)); // Limit to 15 movies
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//       }
//     };

//     const savedMovies = JSON.parse(localStorage.getItem('addedMovies')) || [];
//     setAddedMovies(savedMovies);

//     fetchMovies();
//   }, []);

//   const addToMovieList = (movie) => {
//     const updatedAddedMovies = [...addedMovies, movie];
//     setAddedMovies(updatedAddedMovies);
//     localStorage.setItem('addedMovies', JSON.stringify(updatedAddedMovies));
//   };

//   return (
//     <div className='scroll'>
//       <h2 className='h2title'>Trending</h2>
//       <div className="movie-list-container">
//         {movies.map((movie) => (
//           <div className="movie-card" key={movie.id}>
//             <img
//               src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//               alt={movie.title}
//               className="movie-image"
//             />
//             <div className="movie-info">
//               <h4>{movie.title}</h4>
//               <p>⭐ {movie.vote_average}</p>
//               <button 
//                 className="add-to-list-btn"
//                 onClick={() => addToMovieList(movie)}
//                 disabled={addedMovies.some((m) => m.id === movie.id)}
//               >
//                 {addedMovies.some((m) => m.id === movie.id) ? 'Added' : 'Add to List'}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className='added-movies'>
//         <h2 className='h2title'>My List</h2>
//         <div className="movie-list-container">
//           {addedMovies.map((movie) => (
//             <div className="movie-card" key={movie.id}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//                 alt={movie.title}
//                 className="movie-image"
//               />
//               <div className="movie-info">
//                 <h4>{movie.title}</h4>
//                 <p>⭐ {movie.vote_average}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieList;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../Assets/MovieList.css';

// const TMDB_API_KEY = 'beafc909657c51fe414a76fba559786e'; // Replace with your TMDb API key
// const TMDB_API_URL = 'https://api.themoviedb.org/3/movie/popular';

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);
//   const [addedMovies, setAddedMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(`${TMDB_API_URL}?api_key=${TMDB_API_KEY}`);
//         setMovies(response.data.results.slice(0, 15)); // Limit to 15 movies
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//       }
//     };

//     const savedMovies = JSON.parse(localStorage.getItem('addedMovies')) || [];
//     setAddedMovies(savedMovies);

//     fetchMovies();
//   }, []);

//   const addToMovieList = (movie) => {
//     const updatedAddedMovies = [...addedMovies, movie];
//     setAddedMovies(updatedAddedMovies);
//     localStorage.setItem('addedMovies', JSON.stringify(updatedAddedMovies));
//   };

//   const removeFromMovieList = (movie) => {
//     const updatedAddedMovies = addedMovies.filter((m) => m.id !== movie.id);
//     setAddedMovies(updatedAddedMovies);
//     localStorage.setItem('addedMovies', JSON.stringify(updatedAddedMovies));
//   };

//   return (
//     <div className='scroll'>
//       <h2 className='h2title'>Trending</h2>
//       <div className="movie-list-container">
//         {movies.map((movie) => (
//           <div className="movie-card" key={movie.id}>
//             <img
//               src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//               alt={movie.title}
//               className="movie-image"
//             />
//             <div className="movie-info">
//               <h4>{movie.title}</h4>
//               <p>⭐ {movie.vote_average}</p>
//               <button 
//                 className="add-to-list-btn"
//                 onClick={() => addToMovieList(movie)}
//                 disabled={addedMovies.some((m) => m.id === movie.id)}
//               >
//                 {addedMovies.some((m) => m.id === movie.id) ? 'Added' : 'Add to List'}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className='added-movies'>
//         <h2 className='h2title'>My List</h2>
//         <div className="movie-list-container">
//           {addedMovies.map((movie) => (
//             <div className="movie-card" key={movie.id}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//                 alt={movie.title}
//                 className="movie-image"
//               />
//               <div className="movie-info">
//                 <h4>{movie.title}</h4>
//                 <p>⭐ {movie.vote_average}</p>
//                 <button 
//                   className="remove-from-list-btn"
//                   onClick={() => removeFromMovieList(movie)}
//                 >
//                   Remove from List
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieList;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../Assets/MovieList.css';

// const RAPIDAPI_URL = 'https://imdb-top-100-movies.p.rapidapi.com/';
// const RAPIDAPI_OPTIONS = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-key': '546f19c008mshefb2f76761bd2bap1d038fjsnb4b221542c1b',
//     'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
//   }
// };

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);
//   const [addedMovies, setAddedMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(RAPIDAPI_URL, RAPIDAPI_OPTIONS);
//         const data = response.data; // Check the data structure
//         console.log('API response:', data); // Log the API response to understand its structure
    
//         // Make sure to set `movies` to an array
//         setMovies(Array.isArray(data) ? data.slice(0, 15) : []);
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//       }
//     };
    
//     const savedMovies = JSON.parse(localStorage.getItem('addedMovies')) || [];
//     setAddedMovies(Array.isArray(savedMovies) ? savedMovies : []);

//     fetchMovies();
//   }, []);

//   const addToMovieList = (movie) => {
//     const updatedAddedMovies = [...addedMovies, movie];
//     setAddedMovies(updatedAddedMovies);
//     localStorage.setItem('addedMovies', JSON.stringify(updatedAddedMovies));
//   };

//   const removeFromMovieList = (movie) => {
//     const updatedAddedMovies = addedMovies.filter((m) => m.id !== movie.id);
//     setAddedMovies(updatedAddedMovies);
//     localStorage.setItem('addedMovies', JSON.stringify(updatedAddedMovies));
//   };

//   return (
//     <div className='scroll'>
//       <h2 className='h2title'>Trending</h2>
//       <div className="movie-list-container">
//         {Array.isArray(movies) && movies.map((movie) => (
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
//                 className="add-to-list-btn"
//                 onClick={() => addToMovieList(movie)}
//                 disabled={addedMovies.some((m) => m.id === movie.id)}
//               >
//                 {addedMovies.some((m) => m.id === movie.id) ? 'Added' : 'Add to List'}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className='added-movies'>
//         <h2 className='h2title'>My List</h2>
//         <div className="movie-list-container">
//           {Array.isArray(addedMovies) && addedMovies.map((movie) => (
//             <div className="movie-card" key={movie.id}>
//               <img
//                 src={movie.image ? movie.image : 'default_image_url'}
//                 alt={movie.title}
//                 className="movie-image"
//               />
//               <div className="movie-info">
//                 <h4>{movie.title}</h4>
//                 <p>⭐ {movie.rating || 'N/A'}</p>
//                 <button 
//                   className="remove-from-list-btn"
//                   onClick={() => removeFromMovieList(movie)}
//                 >
//                   Remove from List
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieList;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Assets/MovieList.css';

const RAPIDAPI_URL = 'https://imdb-top-100-movies.p.rapidapi.com/';
const RAPIDAPI_OPTIONS = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '546f19c008mshefb2f76761bd2bap1d038fjsnb4b221542c1b',
    'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [addedMovies, setAddedMovies] = useState([]);
  const navigate = useNavigate(); // Use navigate for routing

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(RAPIDAPI_URL, RAPIDAPI_OPTIONS);
        const data = response.data;
        setMovies(Array.isArray(data) ? data.slice(0, 15) : []);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    const savedMovies = JSON.parse(localStorage.getItem('addedMovies')) || [];
    setAddedMovies(Array.isArray(savedMovies) ? savedMovies : []);

    fetchMovies();
  }, []);

  const addToMovieList = (movie) => {
    const updatedAddedMovies = [...addedMovies, movie];
    setAddedMovies(updatedAddedMovies);
    localStorage.setItem('addedMovies', JSON.stringify(updatedAddedMovies));
    navigate('/lists'); // Navigate to the SelectedMovies page
  };

  return (
   
    <div className='scroll'>
      <h2 className='h2title'>Classics</h2>
      <div className="movie-list-container">
        {Array.isArray(movies) && movies.map((movie) => (
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
                className="add-to-list-btn"
                onClick={() => addToMovieList(movie)}
                disabled={addedMovies.some((m) => m.id === movie.id)}
              >
                {addedMovies.some((m) => m.id === movie.id) ? 'Added' : 'Add to List'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default MovieList;
