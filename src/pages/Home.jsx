import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { getTrendingMovies } from '../services/getTrendingMovies';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movies) return;
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getTrendingMovies();
        setMovies(prevState => [...prevState, ...data.results]);
        console.log(data.results);
        console.log(`movies: ${movies}`);
      } catch (error) {
        toast.error("Oops! Something's gone wrong! 😿", {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title || movie.name}</li>
        ))}
      </ul>
      <ToastContainer />
    </>
  );
};
