import React from 'react';
import '../Assets/RecentStories.css';
import card1 from '../Assets/smile.jpeg';
import card2 from '../Assets/strange.jpg';
import card3 from '../Assets/scream.jpg';
import card4 from '../Assets/god.webp';

const RecentStories = () => {
  return (
    <div className="recent-stories">
        <h3 className='recent'></h3>
      <div className="story">
        <img src={card1} alt="Card 1" className="story-img" />
        <div className="story-content">
        <div style={{height:'230px'}}>
          <h3>Out of Their Depth: Corruption, Scandal and Lies in the New Hollywood - touring season announced</h3>
            </div>
            <button>READ STORY</button>
        </div>
      </div>

      <div className="story">
        <img src={card2} alt="Card 2" className="story-img" />
        <div className="story-content">
          <div style={{height:'230px'}}>
          <h3>With Love and a Major Organ | Trailer</h3>
          <p>Directed by Kim Albright and starring Anna Maguire, Hamza Haq and Veena Sood, this Black Mirror-like sci-fi will have you questioning what it means to be human...</p>
          </div>
          <button>READ STORY</button>
        </div>
      </div>

      <div className="story">
        <img src={card3} alt="Card 3" className="story-img" />
        <div className="story-content">
        <div style={{height:'230px'}}>
          <h3>AFI Announces 2024 Cinematography for Intensive Participants</h3>
          <p>Congratulations to the filmmakers selected for AFI’s Cinematography Intensive for Women (CIW) presented by Panavision! CIW is one of AFI’s tuition-free educational programs...</p>
          </div>
          <button>READ STORY</button>
        </div>
      </div>

      <div className="story">
        <img src={card4} alt="Card 4" className="story-img" />
        <div className="story-content">
        <div style={{height:'230px'}}>
          <h3>‘Sound Of Hope: The Story of Possum Trot</h3>
          <p>Academy Conversations with the cast and crew of 'Sound of Hope: The Story of Possum Trot'...</p>
          </div>
          <button>READ STORY</button>
        </div>
      </div>
    </div>
  );
}

export default RecentStories;
