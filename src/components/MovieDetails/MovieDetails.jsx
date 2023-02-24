import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  return (
    <div>
      MovieDetails
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Outlet />
    </div>
  );
};
