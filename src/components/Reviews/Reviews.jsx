import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/getMovieReviews';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const showMovieReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
        console.log(data);
        console.log(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    showMovieReviews(movieId);
  }, [movieId]);

  return (
    <ul>
      {reviews.map(({ id, content, author }) => (
        <li key={id}>
          <p>AUTHOR: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

//We don't have any reviews for this movie
