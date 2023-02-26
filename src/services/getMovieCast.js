import axios from 'axios';

export const getMovieCast = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=12ac25c7c9088e7eb96a592d77352c75`
  );

  return data;
};

//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
