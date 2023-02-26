import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';
import { getTrendingMovies } from '../../services/getTrendingMovies';
import { Loader } from '../../components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movies) return;
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getTrendingMovies();
        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      <MoviesList movies={movies} />
      {isLoading && <Loader />}
      {/* <ToastContainer /> */}
    </div>
  );
};
