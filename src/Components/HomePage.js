// src/components/HomePage.js
import React from 'react';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Assets/HomePage.css';
import PopularReviews from './PopularReviews';
import PopularLists from './PopularLists';
import RecentStories from './RecentStories';
import MovieTrailerSlider from '../Components/MovieTrailerSlider';

// import { Navbar } from 'react-bootstrap';

const HomePage = () => {
  return (
   <div className='home'>
      <div className="homepage">
    
        <div className="search-bar">
          <input type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for" />
        </div>
      <MovieTrailerSlider/>
        <div className='second'>
          <PopularReviews/>
          <PopularLists/>
        </div>
        <div className='third'>
          <RecentStories/>
        </div>
      </div>
      <footer>
        <div class="Company">
          <ul class="list1">
            <li>Company</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Privacy Policy</li>
            <li>Affiliate Program</li>
          </ul>
        <ul class="list2">
          <li>Services</li>
          <li>FAQ</li>
          <li>Articles</li>
          <li>Merches</li>
          <li>Gossips</li>
          <li>Lists</li>
        </ul>
        <ul class="list3">
          <li>Movies</li>
          <li>Documentaries</li>
          <li>Series</li>
          <li>pilot films</li>
          <li>Music</li>
        </ul>
        <div class="icons">
          <i class="bi bi-twitter" ></i>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-instagram"></i>
          {/* <i class="bi bi-youtube"></i> */}
          
        </div>
        </div>
      </footer>
    </div>
    
  );
};

export default HomePage;
