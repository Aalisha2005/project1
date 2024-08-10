import React from 'react';
import Card from './Card';
import '../Assets/CardContainer.css';
import '../Components/Navbar.js';

const movies = [
  {
    title: 'Avatar: The Way of Water',
    director: 'James Cameron',
    rating: 4,
    tags: ['Sci-fi', 'Action'],
    description: 'A story about the water tribes of Pandora.',
    image: 'avatar.jpg',
    cast: ['cast1.jpg', 'cast2.jpg', 'cast3.jpg', 'cast4.jpg']
  },
  {
    title: 'Inception',
    director: 'Christopher Nolan',
    rating: 5,
    tags: ['Sci-fi', 'Thriller'],
    description: 'A thief who enters the dreams of others to steal secrets.',
    image: 'inception.jpeg',
    cast: ['cast5.jpg', 'cast6.jpg', 'cast7.jpg', 'cast8.jpg']
  },
  {
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    rating: 5,
    tags: ['Action', 'Drama'],
    description: 'Batman faces the Joker in a battle for Gotham City.',
    image: 'knight.webp',
    cast: ['cast9.jpg', 'cast10.jpg', 'cast11.jpg', 'cast12.jpg']
  },
  {
    title: 'Interstellar',
    director: 'Christopher Nolan',
    rating: 4,
    tags: ['Sci-fi', 'Drama'],
    description: 'Exploration of space to save humanity.',
    image: 'interstellar.jpeg',
    cast: ['cast13.jpg', 'cast14.jpg', 'cast15.jpg', 'cast16.jpg']
  },
  {
    title: 'Avengers: Endgame',
    director: 'Anthony and Joe Russo',
    rating: 5,
    tags: ['Action', 'Adventure'],
    description: 'The Avengers assemble to reverse Thanos\' actions.',
    image: 'avenger.jpg',
    cast: ['cast17.jpg', 'cast18.jpg', 'cast19.jpg', 'cast20.jpg']
  },
  {
    title: 'Parasite',
    director: 'Bong Joon-ho',
    rating: 5,
    tags: ['Thriller', 'Drama'],
    description: 'A family schemes to become employed by a wealthy family.',
    image: 'parasite.jpg',
    cast: ['cast21.jpg', 'cast22.jpg', 'cast23.jpg', 'cast24.jpg']
  },
  {
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    rating: 4,
    tags: ['Crime', 'Drama'],
    description: 'Interlocking stories of crime and redemption.',
    image: 'pulp.jpg',
    cast: ['cast25.jpg', 'cast26.jpg', 'cast27.jpg', 'cast28.jpg']
  },
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    rating: 5,
    tags: ['Drama'],
    description: 'A man escapes from prison and finds redemption.',
    image: 'shank.jpg',
    cast: ['cast29.jpg', 'cast30.jpg', 'cast31.jpg', 'cast32.jpg']
  },
  {
    title: 'Joker',
    director: 'Todd Phillips',
    rating: 4,
    tags: ['Drama', 'Thriller'],
    description: 'The origin story of the iconic villain, Joker.',
    image: 'joker.jpeg',
    cast: ['cast33.jpg', 'cast34.jpg', 'cast35.jpg', 'cast36.jpg']
  },
  {
    title: 'Fight Club',
    director: 'David Fincher',
    rating: 4,
    tags: ['Drama', 'Thriller'],
    description: 'An insomniac office worker forms an underground fight club.',
    image: 'fight.jpeg',
    cast: ['cast37.jpg', 'cast38.jpg', 'cast39.jpg', 'cast40.jpg']
  },
  {
    title: 'The Matrix',
    director: 'Wachowskis',
    rating: 5,
    tags: ['Sci-fi', 'Action'],
    description: 'A hacker learns about the true nature of reality.',
    image: 'matrix.jpeg',
    cast: ['cast41.jpg', 'cast42.jpg', 'cast43.jpg', 'cast44.jpg']
  },
  {
    title: 'The Social Network',
    director: 'David Fincher',
    rating: 4,
    tags: ['Biography', 'Drama'],
    description: 'The story behind the creation of Facebook.',
    image: 'face.jpeg',
    cast: ['cast45.jpg', 'cast46.jpg', 'cast47.jpg', 'cast48.jpg']
  },
  {
    title: 'Django Unchained',
    director: 'Quentin Tarantino',
    rating: 4,
    tags: ['Western', 'Drama'],
    description: 'A freed slave becomes a bounty hunter to rescue his wife.',
    image: 'django.jpeg',
    cast: ['cast49.jpg', 'cast50.jpg', 'cast51.jpg', 'cast52.jpg']
  },
  {
    title: 'Mad Max: Fury Road',
    director: 'George Miller',
    rating: 5,
    tags: ['Action', 'Adventure'],
    description: 'A post-apocalyptic road warrior battles for survival.',
    image: 'mad.jpeg',
    cast: ['cast53.jpg', 'cast54.jpg', 'cast55.jpg', 'cast56.jpg']
  },
  {
    title: 'La La Land',
    director: 'Damien Chazelle',
    rating: 4,
    tags: ['Drama', 'Musical'],
    description: 'A jazz musician and an aspiring actress fall in love.',
    image: 'la la.jpeg',
    cast: ['cast57.jpg', 'cast58.jpg', 'cast59.jpg', 'cast60.jpg']
  },
];

const CardContainer = () => {
  return (
    <div className="card-container">
      {movies.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
    </div>
  );
};

export default CardContainer;
