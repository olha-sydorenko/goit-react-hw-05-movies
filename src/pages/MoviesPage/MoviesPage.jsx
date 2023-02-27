import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/getMovieByQuery';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { SearchField } from '../../components/SearchField/SearchField';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [query, setQuery] = useState('');
  const query = searchParams.get('query');

  const handleSubmit = query => {
    setSearchParams({ query: query });
    // setQuery(query);
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
      {query && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
