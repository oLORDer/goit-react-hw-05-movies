import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import NotFound from './NotFound/NotFound';
import MovieDetails from 'pages/Movies/MovieDetails';
import styles from 'styled-components';

const NavLinkStyled = styles(NavLink)`
  color: black;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">movies</NavLinkStyled>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
