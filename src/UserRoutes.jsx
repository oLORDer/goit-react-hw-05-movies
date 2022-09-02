import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Movies } from './pages/Movies/Movies';
import NotFound from './components/NotFound/NotFound';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { CastPage } from 'pages/Cast/CastPage';
import { ReviewsPage } from 'pages/ReviewsPage/ReviewsPage';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<CastPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default UserRoutes;
