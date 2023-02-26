import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/getMovieDetails';
// import { GoBack } from '../GoBack/GoBack';

import { MovieCard } from '../../components/MovieCard/MovieCard';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (!movie) return;
    const showMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
        // console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    showMovieDetails(movieId);
  }, [movieId]);
  // console.log('movie: ', movie);
  // console.log(movie.title);
  return (
    <>
      {movie && <MovieCard movie={movie} />}
      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <Outlet />
      </div>
    </>
  );
};
