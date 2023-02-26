import { useState, useEffect } from 'react';

import { getMovieByQuery } from 'services/getMovieByQuery';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { SearchField } from '../../components/SearchField/SearchField';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams('');
  const [query, setQuery] = useState('');
  // const query = searchParams.get('query');

  const handleSubmit = query => {
    setQuery(query);
    setMovies([]);
    console.log(query);
    console.log(setQuery(query));
  };

  useEffect(() => {
    if (!movies) return;
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
