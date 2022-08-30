import { fetchMostPopularMovies } from 'cervices/api';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchMostPopularMovies()
      .then(({ results }) => setPopularMovies(results))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {popularMovies.length && (
        <ul>
          <li>{popularMovies[0].title}</li>
        </ul>
      )}
    </>
  );
};
