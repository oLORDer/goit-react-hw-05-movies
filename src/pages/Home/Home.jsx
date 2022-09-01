import { fetchMostPopularMovies } from 'cervices/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { List } from './home.styled.js';

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    fetchMostPopularMovies()
      .then(({ results }) => setPopularMovies(results))
      .catch(err => console.log(err));
  }, []);
  // console.log(popularMovies);
  return (
    <>
      <h1>Trending today</h1>
      {popularMovies && (
        <List>
          {popularMovies.map(el => (
            <li key={el.id} id={el.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${el.poster_path}`}
                alt=""
                width={350}
              />
              <Link to={`movies/${el.id}`}>{el.title}</Link>
            </li>
          ))}
        </List>
      )}
    </>
  );
};
