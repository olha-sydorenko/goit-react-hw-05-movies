import { useState, useEffect } from 'react';
import { getMovieByQuery } from 'services/getMovieByQuery';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { SearchField } from '../../components/SearchField/SearchField';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [query, setQuery] = useState('');

  const handleSubmit = query => {
    setQuery(query);
    setMovies([]);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovieByQuery(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <>
      <SearchField onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
