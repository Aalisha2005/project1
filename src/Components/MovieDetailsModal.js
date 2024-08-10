// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import '../Assets/MovieDetailsModal.css';

// const MovieDetailsModal = ({ movie, onClose }) => {
//   const [reviews, setReviews] = useState('');
//   const [cast, setCast] = useState([]);

//   const fetchCast = useCallback(async () => {
//     try {
//       const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=beafc909657c51fe414a76fba559786e`);
//       setCast(response.data.cast.slice(0, 5)); // Get top 5 cast members
//     } catch (error) {
//       console.error('Error fetching cast:', error);
//     }
//   }, [movie.id]);

//   useEffect(() => {
//     fetchCast();
//   }, [fetchCast]);

//   const handleReviewChange = (event) => {
//     setReviews(event.target.value);
//   };

//   const handleSubmitReview = () => {
//     alert(`Review submitted: ${reviews}`);
//     setReviews('');
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span>
//         <h2>{movie.title}</h2>
//         <p>Rating: {movie.vote_average}</p>
//         <p>{movie.overview}</p>
//         {/* <h3>Cast</h3>
//         <ul>
//           {cast.map(member => (
//             <li key={member.cast_id}>{member.name} as {member.character}</li>
//           ))}
//         </ul> */}
//         <div className="review-section">
//           <h3>Submit a Review</h3>
//           <textarea value={reviews} onChange={handleReviewChange} />
//           <button onClick={handleSubmitReview}>Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import '../Assets/MovieDetailsModal.css';

const MovieDetailsModal = ({ movie, onClose }) => {
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState('');

  // Fetching the top cast for the selected movie
  const fetchCast = useCallback(async () => {
    const url = `https://imdb-movies-web-series-etc-search.p.rapidapi.com/title/get-top-cast?tconst=${movie.id}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '546f19c008mshefb2f76761bd2bap1d038fjsnb4b221542c1b',
        'x-rapidapi-host': 'imdb-movies-web-series-etc-search.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.get(url, options);
      setCast(response.data.slice(0, 5)); // Get top 5 cast members
    } catch (error) {
      console.error('Error fetching cast:', error);
    }
  }, [movie.id]);

  useEffect(() => {
    fetchCast();
  }, [fetchCast]);

  const handleReviewChange = (event) => {
    setReviews(event.target.value);
  };

  const handleSubmitReview = async () => {
    try {
      const review = {
        userId: 1, // Replace with the actual user ID
        movieId: movie.id,
        reviewText: reviews
      };

      await axios.post('http://localhost:9001/reviews/add', review);
      alert('Review submitted successfully');
      setReviews('');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Error submitting review');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{movie.title}</h2>
        <img src={movie.image} alt={movie.title} className="movie-poster" />
        <p>Release Date: {movie.releaseDate}</p>
        <p>Rating: {movie.vote_average}</p>
        <p>{movie.overview}</p>
        <div className="cast-list">
          <h3>Top Cast</h3>
          <ul>
            {cast.map((member, index) => (
              <li key={index}>{member.name} as {member.character}</li>
            ))}
          </ul>
        </div>
        <div className="review-section">
          <h3>Submit a Review</h3>
          <textarea value={reviews} onChange={handleReviewChange} />
          <button onClick={handleSubmitReview}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
