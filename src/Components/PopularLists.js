import React from 'react';
import List from '../Components/List';
import '../Assets/PopularLists.css';

const lists = [
  {
    title: 'Definition of girly classics',
    likes: 67000,
    comments: 137,
    images: ['legal.jpeg', 'prada.jpeg', 'marie.jpeg', 'ten.jpeg']
  },
  {
    title: 'Horror Movies Everyone Should Watch at Least Once',
    likes: 26000,
    comments: 219,
    images: ['evil.jpg', 'bar.jpeg', 'mum.jpeg', 'black.jpeg']
  },
  {
    title: 'For when you want to feel something',
    likes: 160000,
    comments: 1100,
    images: ['wild.jpeg', 'pi.jpeg', 'poet.jpeg', 'pride.jpeg']
  }
];

const PopularLists = () => {
  return (
    <div className="popular-lists">
      <h2 className='hhh'>Popular Lists</h2>
      {lists.map((list, index) => (
        <List key={index} {...list}/>
      ))}
    </div>
  );
};

export default PopularLists;
