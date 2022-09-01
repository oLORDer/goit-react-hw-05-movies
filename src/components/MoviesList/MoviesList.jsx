import { Link } from 'react-router-dom';
import { List } from 'pages/Home/home.styled.js';

export const MoviesList = ({ popularMovies }) => {
  return (
    <List>
      {popularMovies.map(el => (
        <li key={el.id} id={el.id}>
          <img
            src={`https://image.tmdb.org/t/p/original${el.poster_path}`}
            alt=""
            width={350}
          />
          <Link to={`/movies/${el.id}`}>{el.title}</Link>
        </li>
      ))}
    </List>
  );
};
