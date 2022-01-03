import React, { useEffect, useState } from 'react';
import classes from './AvailableMovies.module.css';
import Movie from './Movie/Movie.jsx';

const AvailableMovies = props => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const request = props.searchResult;
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=32d5ad6c4894ac245c2a9a46fa82b701&include_adult=false&query=${request}&language=ru-RU`
        );
        const resData = await res.json();
        if (!res.ok || res.status === 402) {
          setError('Кина не будет! Введите название');
          throw new Error('Movie not found');
        }

        const filteredData = resData.results.filter(data => data.poster_path);

        const movies = filteredData.map(result => {
          return {
            id: result.id,
            title: result.title,
            summary: result.overview,
            poster:
              result.poster_path !== null
                ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
                : 'Постер не найден. Извините',
            year: result.release_date,
            rating: result.vote_average,
          };
        });

        setMovies(movies);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovies();
  }, [props.searchResult]);

  return (
    <section className={classes.movies}>
      {movies.map(movie => {
        return (
          <Movie
            name={movie.title}
            id={movie.id}
            key={movie.id}
            poster={movie.poster}
            year={movie.year}
            rating={movie.rating}
            summary={movie.summary}
          />
        );
      })}
      {error && <p className={classes.error}>{error}</p>}
    </section>
  );
};

export default AvailableMovies;
