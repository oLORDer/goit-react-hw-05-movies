import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'cervices/api';

import { StyledList } from './castPage.styled';

export const CastPage = () => {
  const [cost, setCost] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId)
      .then(({ cast }) => setCost(cast))
      .catch(error => console.log(error));
  }, [movieId]);

  console.log(movieId);
  return (
    <StyledList>
      {cost?.map(({ profile_path, name, character, id }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/original${profile_path}`
                : `https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=2000`
            }
            alt={name}
            width="100px"
          />
          <p>{name}</p>
          <p>{character}</p>
        </li>
      ))}
    </StyledList>
  );
};
