import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/getMovieCast';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const showMovieCast = async () => {
      try {
        const data = await getMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    showMovieCast(movieId);
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ name, character, profile_path }) => (
        <li key={name}>
          <img src={`${IMG_URL}${profile_path}`} alt={name} width="200" />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};
