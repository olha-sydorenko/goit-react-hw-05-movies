import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/getMovieDetails';
import { GoBack } from '../GoBack/GoBack';

import { MovieItem } from '../MovieItem/MovieItem';

export const MovieDetails = ({ id, title }) => {
  const [movieId, setMovieId] = useParams();
  const [movie, setMovie] = useState();

  // const [searchParams, setSearchParams] = useSearchParams();
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movie) return;
    const showMovieDetails = async () => {
      try {
        // setIsLoading(true);
        const data = await getMovieDetails(movieId);
        setMovie(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    showMovieDetails();
  }, [movie, movieId]);

  return (
    <>
      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <Outlet />
      </div>
      {movie && <h1>{movie.title}</h1>}
    </>
  );
};
