import axios from 'axios';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?api_key=12ac25c7c9088e7eb96a592d77352c75'
  );

  return data;
};
