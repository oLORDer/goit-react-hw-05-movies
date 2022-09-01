import { useState, useEffect } from 'react';
import { fetchMoviesForQuery } from 'cervices/api';
import { InputQuery } from 'components/InputQuery/InputQuery';
import { Home } from 'pages/Home/Home';

export const Movies = () => {
  const [moviesArr, setMoviesArr] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchMoviesForQuery(query, page)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, [query]);

  const setNewQuery = e => {
    e.preventDefault();
    setQuery(e);
  };

  return (
    <>
      <InputQuery onSubmitFunc={setNewQuery} />
      {moviesArr && <Home />}
    </>
  );
};
