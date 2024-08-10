import React from 'react';
import '../Assets/Review.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Utility function to format likes
const formatLikes = (likes) => {
  if (likes >= 1000) {
    return (likes / 1000).toFixed(1) + 'k';
  }
  return likes;
};

const Review = ({ title, year, user, rating, reviewText, likes, image }) => {
  // Define the base path for your images
  const basePath = `${process.env.PUBLIC_URL}/images`;

  // Generate the full image path
  const imagePath = `${basePath}/${image}`;

  return (
    <div className="review">
      <img src={imagePath} alt={title} />
      <div className="review-content">
        <h3>{title} ({year})</h3>
        <p>{reviewText}</p>
        <div className="review-footer">
          <FavoriteBorderIcon className="like-icon" />
          <span>{formatLikes(likes)} </span> {/* Use formatted likes */}
        </div>
      </div>
    </div>
  );
};

export default Review;
