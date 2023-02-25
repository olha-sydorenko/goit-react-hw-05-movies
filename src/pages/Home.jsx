import { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { getTrendingMovies } from '../services/getTrendingMovies';
import { Loader } from '../components/Loader/Loader';

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

  //   async function showMovieDetails(event) {
  // //
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

  return (
    <>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.title || movie.name} {movie.id}
          </li>
        ))}
      </ul>
      {isLoading && <Loader />}
      {/* <ToastContainer /> */}
    </>
  );
};
