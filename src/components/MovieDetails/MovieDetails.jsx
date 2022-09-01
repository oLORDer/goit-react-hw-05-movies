import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieForId } from 'cervices/api';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieForId(movieId).then(res => setMovie(res));
  }, [movieId]);
  return (
    <>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
            width="350"
          />
          <div>
            <h2>{movie.original_title}</h2>
            <p>Rating: {movie.vote_average}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map(({ name }, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
