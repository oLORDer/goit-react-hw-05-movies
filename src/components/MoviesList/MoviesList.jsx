import { Link } from 'react-router-dom';
import { List } from 'pages/Home/home.styled.js';

export const MoviesList = ({ popularMovies }) => {
  return (
    <List>
      {popularMovies.map(el => (
        <li key={el.id} id={el.id}>
          <Link to={`/movies/${el.id}`}>
            <img
              src={
                el.poster_path
                  ? `https://image.tmdb.org/t/p/original${el.poster_path}`
                  : `https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=2000`
              }
              alt=""
              width={350}
            />
            {el.title}
          </Link>
        </li>
      ))}
    </List>
  );
};
