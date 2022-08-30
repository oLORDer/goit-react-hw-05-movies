import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '9ef4f856967516d9db9d1f8ae9ae1dd2',
};

export const fetchMostPopularMovies = async () => {
  const { data } = await axios.get('/trending/movie/week');
  return data;
};

export const movies = async (name, page) => {
  const { data } = await axios.get('/search/movie', {
    params: {
      query: name,
      page: page,
    },
  });
  return data;
};
