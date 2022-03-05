import React, { useEffect, useState } from 'react';
import classes from './AvailableMovies.module.css';
import Movie from './Movie/Movie';
import LoadingSpinner from '../UI/LoadingSpinner';
import { MovieInterface } from '../../interfaces/MovieInterface';

interface AvailableMoviesProps {
  searchResult: string;
}

/**
 * @param searchResult название фильма
 * @returns AvailableMovies Component
 */
const AvailableMovies: React.FC<AvailableMoviesProps> = ({
  searchResult,
}): React.ReactElement => {
  const [movies, setMovies] = useState<Array<MovieInterface>>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [moviesIsLoaded, setMoviesIsLoaded] = useState<boolean>(true);

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const request = searchResult;
        setIsLoading(true);
        setMoviesIsLoaded(false);
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=false&query=${request}&language=ru-RU`
        );
        const resData = await res.json();
        if (!res.ok || res.status === 402) {
          setError('Кина не будет! Введите название');
          throw new Error('Movie not found');
        }

        const filteredData = resData.results.filter(
          (data: MovieInterface) => data.poster_path
        );

        const movies = filteredData.map((result: MovieInterface) => {
          return {
            id: result.id,
            title: result.title,
            overview: result.overview,
            poster_path:
              result.poster_path !== null
                ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
                : 'Постер не найден.',
            release_date: result.release_date,
            vote_average: result.vote_average,
          };
        });

        setMovies(movies);
        setIsLoading(false);
        setMoviesIsLoaded(true);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovies();
  }, [searchResult, API_KEY]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <section
        className={`${classes.movies} ${
          moviesIsLoaded ? classes['movies-appear'] : ''
        }`}
      >
        {movies.map(movie => {
          return (
            <Movie
              title={movie.title}
              id={movie.id}
              key={movie.id}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              overview={movie.overview}
            />
          );
        })}
        {error && <p className={classes.error}>{error}</p>}
      </section>
    </>
  );
};

export default AvailableMovies;
