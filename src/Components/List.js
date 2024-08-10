import React from 'react';
import '../Assets/List.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

// Utility functions to format likes and comments
const formatLikes = (likes) => {
  if (likes >= 1000) {
    return (likes / 1000).toFixed(1) + 'k';
  }
  return likes;
};

const formatCom = (comments) => {
  if (comments >= 1000) {
    return (comments / 1000).toFixed(1) + 'k';
  }
  return comments;
};

const List = ({ title, likes, comments, images }) => {
  return (
    <div className="list">
      <h3>{title}</h3>
      <div className="list-images">
        {images.map((image, index) => (
          <img key={index} src={`images/${image}`} alt={`list image ${index + 1}`} />
        ))}
      </div>
      <div className="list-footer">
        <FavoriteBorderIcon className="footer-icon" />
        <span className="footer-text">{formatLikes(likes)}</span>
        <ChatBubbleIcon className="footer-icon" />
        <span className="footer-text">{formatCom(comments)}</span>
      </div>
    </div>
  );
};

export default List;
