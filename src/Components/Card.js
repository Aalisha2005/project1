import React from 'react';
import '../Assets/Card.css';
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {
  const imageUrl = process.env.PUBLIC_URL + `/images/${movie.image}`;
  const castImageUrls = movie.cast.map(actor => process.env.PUBLIC_URL + `/images/cast/${actor}`);
  
  return (
   
    <div className="card">
        <img src={imageUrl} alt={movie.title} />
        <div className="card-content">
          <h2>{movie.title}</h2>
          <p>Directed by {movie.director}</p>
          <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className="star">
                {i < movie.rating ? '★' : '☆'}
              </span>
            ))}
          </div>
          <div className="tags">
            {movie.tags.map(tag => (
              <span key={tag} className={`tag ${tag.toLowerCase()}`}>{tag}</span>
            ))}
          </div>
          <p>{movie.description}</p>
          <div className="cast">
            {castImageUrls.map((url, index) => (
              <img key={index} src={url} alt={`Cast ${index + 1}`} className="cast-image" />
            ))}
          </div>
        </div>
      </div>
    
    
  );
};

export default Card;
