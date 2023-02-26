import axios from 'axios';

export const getMovieByQuery = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=12ac25c7c9088e7eb96a592d77352c75&language=en-US&page=1&include_adult=false&query=${query}`
  );

  return data;
};
//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
