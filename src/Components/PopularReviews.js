import React from 'react';
import Review from '../Components/Review.js';
import '../Assets/PopularReviews.css';

const reviews = [
  {
    title: 'Twisters',
    year: 2024,
    user: 'corey',
    rating: 5,
    reviewText: 'Guys will say they know a spot and then drive you into a tornado.',
    likes: 11787,
    image: 'twisters.avif'
  },
  {
    title: 'Longlegs',
    year: 2024,
    user: 'theresahole',
    rating: 4.5,
    reviewText: 'Calling yourself longlegs as a serial killer is so cunty lowkey... like what if i went by the bigfatjuicybooty strangler.',
    likes: 27549,
    image: 'long.webp'
  },
  {
    title: 'Longlegs',
    year: 2024,
    user: 'demi adejuyigbe',
    rating: 4,
    reviewText: 'Really captures the horror of not knowing what you’re supposed to do while someone sings happy birthday to you.',
    likes: 5707,
    image: 'long2.jpeg'
  },
  {
    title: 'Into the Storm',
    year: 2024,
    user: 'demi adejuyigbe',
    rating: 4,
    reviewText: 'Into the Storm is purely a guilty pleasure, that works as a good fun flick. Its not something remotely phenomenal, but its entertaining & visually rich, nonetheless.',
    likes: 7087,
    image: 'storm.jpeg'
  }
];

const PopularReviews = () => {
  return (
    <div className="popular-reviews">
      <h2 className='hh'>Popular Reviews This Week</h2>
      {reviews.map((review, index) => (
        <Review key={index} {...review} />
      ))}
    </div>
  );
};

export default PopularReviews;
