import { useState, useEffect } from 'react';
import { movies } from 'cervices/api';

export const Movies = () => {
  const [moviesArr, setMoviesArr] = useState(null);

  useEffect(() => {
    movies('kill', 1)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  return <div>Movies</div>;
};
