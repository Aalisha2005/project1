import React, { useState, useEffect } from 'react';

const MovieDetails = ({ movie, onClose }) => {
  const [details, setDetails] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    if (movie) {
      fetchMovieDetails();
      fetchReviews();
    }
  }, [movie]);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles/${movie.id}/main_actors`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com',
          'x-rapidapi-key': '546f19c008mshefb2f76761bd2bap1d038fjsnb4b221542c1b'
        }
      });
      const data = await response.json();
      setDetails(data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  const fetchReviews = async () => {
    // This is just a placeholder. Replace it with actual fetching logic.
    setReviews([{ id: 1, text: 'Great movie!' }, { id: 2, text: 'Loved it!' }]);
  };

  const handleReviewSubmit = () => {
    // This is just a placeholder. Replace it with actual submit logic.
    setReviews([...reviews, { id: reviews.length + 1, text: newReview }]);
    setNewReview('');
  };

  if (!details) return null;

  return (
    <div className="movie-details">
      <button onClick={onClose}>Close</button>
      <h2>{movie.title}</h2>
      <p>Rating: {details.vote_average}</p>
      <p>Cast: {details.actors.map(actor => actor.name).join(', ')}</p>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(review => <li key={review.id}>{review.text}</li>)}
      </ul>
      <input
        type="text"
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
        placeholder="Write a review"
      />
      <button onClick={handleReviewSubmit}>Submit</button>
    </div>
  );
};

export default MovieDetails;
