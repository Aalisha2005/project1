// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import '../Assets/MovieGrid.css';
// import Upcoming from './Upcoming';
// import Popularseries from './Popularseries';
// import MovieList from './MovieList';

// const MovieCard = ({ movie }) => (
//   <div className="movie-card1">
//     <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//     {/* <h2>{movie.title}</h2> */}
//     {/* <p>{movie.overview}</p> */}
//   </div>
// );

// const TopRated = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   const fetchMovies = async () => {
//     try {
//       const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=beafc909657c51fe414a76fba559786e');
//       const data = await response.json();
//       setMovies(data.results);
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//     }
//   };

//   const settings = {
//     infinite: true,
//     speed: 300,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className='bodycar'>
//       {/* <MovieTrailerSlider/> */}
//     <div className="movie-slider-container">
//       <h3 className="page-title">Top Rated</h3>
//       <div className="movie-slider">
//         <Slider {...settings}>
//           {movies.map(movie => (
//             <MovieCard key={movie.id} movie={movie} />
//           ))}
//         </Slider>
//       </div>
//     </div>
//     <Popularseries/>
//     <MovieList/>
//    <Upcoming/>
//     </div>
//   );
// };

// export default TopRated;
// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import '../Assets/MovieGrid.css';
// import MovieDetailsModal from './MovieDetailsModal';
// import Popularseries from './Popularseries';
// import MovieList from './MovieList';
// import Upcoming from './Upcoming'; 

// // MovieCard Component Integrated within TopRated
// const MovieCard = ({ movie, onClick }) => (
//   <div 
//     className="movie-card1" 
//     onClick={() => onClick(movie)}
//     style={{ cursor: 'pointer' }} // Ensure the cursor shows a pointer on hover
//   >
//     <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//     {/* <h2>{movie.title}</h2> */}
//     {/* <p>{movie.overview}</p> */}
//   </div>
// );

// const TopRated = () => {
//   const [movies, setMovies] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState(null);

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   const fetchMovies = async () => {
//     try {
//       const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c6dae17b00cc2fa8647cf23ffe2f5b10');
//       const data = await response.json();
//       setMovies(data.results);
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//     }
//   };

//   const handleMovieClick = (movie) => {
//     console.log('Movie clicked:', movie); // Debugging line to ensure click is registered
//     setSelectedMovie(movie);
//   };

//   const handleCloseModal = () => {
//     setSelectedMovie(null);
//   };

//   const settings = {
//     infinite: true,
//     speed: 300,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className='bodycar'>
//       <div className="movie-slider-container">
//         <h3 className="page-title">Top Rated</h3>
//         <div className="movie-slider">
//           <Slider {...settings}>
//             {movies.map(movie => (
//               <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick} />
//             ))}
//           </Slider>
//         </div>
//       </div>
//       {selectedMovie && <MovieDetailsModal movie={selectedMovie} onClose={handleCloseModal} />}
//       <Upcoming />
//       <MovieList />
//       <Popularseries />
//     </div>
//   );
// };

// export default TopRated;
// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import '../Assets/MovieGrid.css';
// import MovieDetailsModal from './MovieDetailsModal';
// import MovieCard from './MovieCard'; // Make sure this path is correct

// const TopRated = () => {
//   const [movies, setMovies] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [error, setError] = useState(null);  // New state for error

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   // const fetchMovies = async () => {
//   //   try {
//   //     const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=beafc909657c51fe414a76fba559786e');
//   //     if (!response.ok) {
//   //       throw new Error('Failed to fetch movies');  // Error if the response is not OK
//   //     }
//   //     const data = await response.json();
//   //     setMovies(data.results);
//   //   } catch (error) {
//   //     console.error('Error fetching movies:', error);
//   //     setError('Failed to load movies. Please try again later.');
//   //   }
//   // };
//   const fetchMovies = async () => {
//     try {
//       const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=beafc909657c51fe414a76fba559786e');
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setMovies(data.results);
//     } catch (error) {
//       console.error('Error fetching movies:', error.message);
//       setError(`Failed to load movies: ${error.message}`);
//     }
//   };
  
//   const handleMovieClick = (movie) => {
//     console.log('Movie clicked:', movie);
//     setSelectedMovie(movie);
//   };

//   const handleCloseModal = () => {
//     setSelectedMovie(null);
//   };

//   const settings = {
//     infinite: true,
//     speed: 300,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   if (error) {  // Show error if there's an error
//     return <div className="error-message">{error}</div>;
//   }

//   return (
//     <div className='bodycar'>
//       <div className="movie-slider-container">
//         <h3 className="page-title">Top Rated</h3>
//         <div className="movie-slider">
//           <Slider {...settings}>
//             {movies.map(movie => (
//               <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick} />
//             ))}
//           </Slider>
//         </div>
//       </div>
//       {selectedMovie && <MovieDetailsModal movie={selectedMovie} onClose={handleCloseModal} />}
//     </div>
//   );
// };

// export default TopRated;
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../Assets/MovieGrid.css';
import Upcoming from './Upcoming';
import Popularseries from './Popularseries';
import MovieList from './MovieList';

const MovieCard = ({ movie }) => (
  <div className="movie-card1">
    <img src={movie.poster} alt={movie.title} />
  </div>
);

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '546f19c008mshefb2f76761bd2bap1d038fjsnb4b221542c1b',
        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMovies(data || []);
    } catch (error) {
      setError(`Failed to fetch movies: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bodycar">
      <div className="movie-slider-container">
        <h3 className="page-title">Top Rated</h3>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <div className="movie-slider">
          <Slider {...settings}>
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={{ 
                  title: movie.title, 
                  poster: movie.image 
                }}
              />
            ))}
          </Slider>
        </div>
      </div>
      {/* <Popularseries /> */}
     <MovieList/>
      <Upcoming />
    </div>
  );
};

export default TopRated;
