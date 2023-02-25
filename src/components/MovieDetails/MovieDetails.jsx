import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';

export const MovieDetails = ({ id, title }) => {
  let movieId = id;

  return (
    <>
      <div>
        MovieDetails
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <Outlet />
      </div>
      <li key="id">
        <Link to={`./movies/${movieId}`}>{title}</Link>
      </li>
    </>
  );
};

// async function showMovieDetails(event) {
//
//
//     filmId = event.target.closest('li').id;

//     try {
//       const data = await apiServiceModal.getMovieDetails(filmId);
//       filmCard.innerHTML = renderModal(response);

//       // modal buttons
//       const buttonsContainer = document.querySelector('.btn-wrap');
//       checkButtonsActivity(filmId);
//       buttonsContainer.addEventListener('click', chooseButton);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//
