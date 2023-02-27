import React from 'react';
import { MovieWrapper } from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const { title, poster_path, genres, vote_average, overview } = movie;
  const userScore = Math.round(vote_average * 10);

  return (
    <MovieWrapper>
      {<img src={`${IMG_URL}${poster_path}`} alt={title} width="400" />}
      <div>
        <h1>{title}</h1>
        <p>User score: {userScore}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </MovieWrapper>
  );
};
