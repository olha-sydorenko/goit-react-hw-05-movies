import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <div>
      Movies
      <NavLink to="movieDetails">MovieDetails</NavLink>
      <Outlet />
    </div>
  );
};
