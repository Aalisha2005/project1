import React, { useState, useEffect } from 'react';
import '../Assets/MovieTrailerSlider.css';

const MovieTrailerSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const trailers = [
        {
            title: 'Dune',
            videoUrl: 'https://www.youtube.com/embed/8g18jFHCLXk', // Dune Trailer
            posterUrl: 'https://image.tmdb.org/t/p/w1280/d5NXSklXo0qyIYkgV94XAgMIckC.jpg' // Dune Poster
        },
        {
            title: 'The Dark Knight',
            videoUrl: 'https://www.youtube.com/embed/EXeTwQWrcwY', // The Dark Knight Trailer
            posterUrl: 'https://image.tmdb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg' // The Dark Knight Poster
        },
        {
            title: 'Interstellar',
            videoUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E', // Interstellar Trailer
            posterUrl: 'https://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg' // Interstellar Poster
        },
        {
            title: 'Avengers: Endgame',
            videoUrl: 'https://www.youtube.com/embed/TcMBFSGVi1c', // Avengers: Endgame Trailer
            posterUrl: 'https://image.tmdb.org/t/p/w1280/or06FN3Dka5tukK1e9sl16pB3iy.jpg' // Avengers: Endgame Poster
        },
        {
            title: 'Joker',
            videoUrl: 'https://www.youtube.com/embed/zAGVQLHvwOY', // Joker Trailer
            posterUrl: 'https://image.tmdb.org/t/p/w1280/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' // Joker Poster
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % trailers.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [trailers.length]);

    return (
        <div className="slider">
            {trailers.length > 0 ? (
                <div className="slide">
                    <iframe
                        src={trailers[currentIndex].videoUrl}
                        title={trailers[currentIndex].title}
                        frameBorder="0"
                        allowFullScreen
                    />
                    <img src={trailers[currentIndex].posterUrl} alt={trailers[currentIndex].title} className="poster" />
                </div>
            ) : (
                <p>Loading trailers...</p>
            )}
        </div>
    );
};

export default MovieTrailerSlider;
