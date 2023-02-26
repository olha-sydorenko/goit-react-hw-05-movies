import React from 'react';

export const MovieCard = ({ movie }) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const { title, poster_path, genres, vote_average, overview } = movie;
  const userScore = Math.round(vote_average * 10);
  //   const genresNames = genres.map(genre => genre.name);
  console.log(movie);
  console.log(genres);

  return (
    <div>
      {<img src={`${IMG_URL}${poster_path}`} alt={title} />}
      <div>
        <h1>{title}</h1>
        <p>User score: {userScore}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        {/* {genres && <p>{Object.values(genresNames).join(', ')}</p>} */}
      </div>
    </div>
  );
};
