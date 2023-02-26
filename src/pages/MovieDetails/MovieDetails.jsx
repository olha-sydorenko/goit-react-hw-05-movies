import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/getMovieDetails';
// import { GoBack } from '../GoBack/GoBack';

//import { MovieItem } from '../MovieItem/MovieItem';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    if (!movie) return;
    const showMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    showMovieDetails();
  }, [movieId]);

  return (
    <>
      <h1>
        {movie.title} || {movie.name}
      </h1>
      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <Outlet />
      </div>
    </>
  );
};
