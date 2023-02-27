import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link state={{ from: location }} to={`/movies/${movie.id}`}>
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
