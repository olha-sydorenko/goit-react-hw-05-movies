import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../services/getMovieDetails';
import { MovieCard } from '../../components/MovieCard/MovieCard';

import { StyledNavLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const showMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    showMovieDetails(movieId);
  }, [movieId]);

  return (
    <>
      <Link to={location.state?.from ?? '/'}>Go back</Link>
      {movie && <MovieCard movie={movie} />}
      <h2>Additional information</h2>

      <StyledNavLink state={location.state} to="cast">
        Cast
      </StyledNavLink>
      <StyledNavLink state={location.state} to="reviews">
        Reviews
      </StyledNavLink>
      <Outlet />
    </>
  );
};

export default MovieDetails;
