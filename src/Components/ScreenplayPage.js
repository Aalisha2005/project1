import React, { useState } from 'react';
import '../Assets/Screenplay.css';

const moviesDatabase = [
  {
    id: 1,
    title: 'The Matrix',
    overview: 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
    poster_url: 'https://via.placeholder.com/200x300?text=The+Matrix',
    keywords: ['computer', 'hacker', 'reality', 'war'],
  },
  {
    id: 2,
    title: 'Inception',
    overview: 'A thief who enters the dreams of others to steal secrets must plant an idea in someone’s mind.',
    poster_url: 'https://via.placeholder.com/200x300?text=Inception',
    keywords: ['dream', 'thief', 'idea', 'mind'],
  },
  {
    id: 3,
    title: 'Interstellar',
    overview: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.',
    poster_url: 'https://via.placeholder.com/200x300?text=Interstellar',
    keywords: ['space', 'explorers', 'wormhole', 'survival'],
  },
  // Add more movies as needed
];

const ScreenplayPage = () => {
  const [screenplay, setScreenplay] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const relatedMovies = moviesDatabase.filter((movie) =>
      movie.keywords.some((keyword) => screenplay.toLowerCase().includes(keyword))
    );

    setMovies(relatedMovies);
    setLoading(false);
  };

  return (
    <div className="screenplay-container">
      <h2>Describe Your Story</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={screenplay}
          onChange={(e) => setScreenplay(e.target.value)}
          placeholder="Write your screenplay here..."
          rows="5"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Finding Movies...' : 'Find Related Movies'}
        </button>
      </form>
      <div className="movies-container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.poster_url} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          ))
        ) : (
          <p>No related movies found. Please describe your story in more detail.</p>
        )}
      </div>
    </div>
  );
};

export default ScreenplayPage;
