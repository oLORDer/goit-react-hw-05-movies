import { useState, useEffect } from 'react';
import { fetchMoviesForQuery } from 'cervices/api';
import { InputQuery } from 'components/InputQuery/InputQuery';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [moviesArr, setMoviesArr] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchMoviesForQuery(query, page)
      .then(({ results }) => setMoviesArr(results))
      .catch(err => console.log(err));
  }, [query, page]);

  const setNewQuery = e => {
    setQuery(e);
  };

  return (
    <main>
      <InputQuery onSubmitFunc={setNewQuery} />
      {moviesArr && <MoviesList popularMovies={moviesArr} />}
    </main>
  );
};
