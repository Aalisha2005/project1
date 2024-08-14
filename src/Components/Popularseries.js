// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import '../Assets/MovieGrid.css';


// const MovieCard = ({ movie }) => (
//   <div className="movie-card1">
//     <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//     {/* <h2>{movie.title}</h2> */}
//     {/* <p>{movie.overview}</p> */}
//   </div>
// );

// const Popularseries = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   const fetchMovies = async () => {
//     try {
//       const response = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=beafc909657c51fe414a76fba559786e');
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
//       <h3 className="page-title">Popular Series</h3>
//       <div className="movie-slider">
//         <Slider {...settings}>
//           {movies.map(movie => (
//             <MovieCard key={movie.id} movie={movie} />
//           ))}
//         </Slider>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Popularseries;

// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import '../Assets/MovieGrid.css';
// import MovieDetailsModal from './MovieDetailsModal';



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

// const Popularseries = () => {
//   const [movies, setMovies] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState(null);

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   const fetchMovies = async () => {
//     try {
//       const response = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=beafc909657c51fe414a76fba559786e');
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
//         <h3 className="page-title">Popular Series</h3>
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

// export default Popularseries;
// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import '../Assets/MovieGrid.css';

// const MovieCard = ({ movie }) => (
//   <div className="movie-card1">
//     <img src={movie.image} alt={movie.title} />
//     {/* <h2>{movie.title}</h2> */}
//     {/* <p>{movie.overview}</p> */}
//   </div>
// );

// const Popularseries = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   const fetchMovies = async () => {
//     const url = 'https://imdb-top-100-movies.p.rapidapi.com/series/';
//     const options = {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-key': '546f19c008mshefb2f76761bd2bap1d038fjsnb4b221542c1b',
//         'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await fetch(url, options);
//       const data = await response.json(); // Assuming the response is in JSON format
//       setMovies(data); // Update this line based on the structure of your API response
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
//       <div className="movie-slider-container">
//         <h3 className="page-title">Popular Series</h3>
//         <div className="movie-slider">
//           <Slider {...settings}>
//             {movies.map(movie => (
//               <MovieCard key={movie.id} movie={movie} />
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Popularseries;
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../Assets/MovieGrid.css';
import MovieDetailsModal from './MovieDetailsModal';

const MovieCard = ({ movie, onClick }) => (
  <div className="movie-card1" onClick={() => onClick(movie)}>
    <img src={movie.image} alt={movie.title} />
  </div>
);

const Popularseries = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/series/';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '546f19c008mshefb2f76761bd2bap1d038fjsnb4b221542c1b',
        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json(); // Assuming the response is in JSON format
      setMovies(data); // Update this line based on the structure of your API response
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
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
        <h3 className="page-title">Popular Series</h3>
        <div className="movie-slider">
          <Slider {...settings}>
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick} />
            ))}
          </Slider>
        </div>
      </div>
      {selectedMovie && (
        <MovieDetailsModal 
          movie={selectedMovie} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default Popularseries;
