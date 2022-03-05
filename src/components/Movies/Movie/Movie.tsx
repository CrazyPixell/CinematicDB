import React, { useContext } from 'react';
import classes from './Movie.module.css';
import QueueContext from '../../../store/queue-context';
import StarIcon from '../../UI/StarIcon';
import { MovieInterface } from '../../../interfaces/MovieInterface';

/**
 * @param id id фильма
 * @param title название фильма
 * @param poster_path постер фильма
 * @param release_date дата релиза фильма
 * @param vote_average рейтинг фильма
 * @param overview описание фильма
 * @returns Movie Component
 */
const Movie: React.FC<MovieInterface> = ({
  id,
  title,
  poster_path,
  release_date,
  vote_average,
  overview,
}): React.ReactElement => {
  const queueContext = useContext(QueueContext);

  const addToQueueHandler = () => {
    queueContext.addItem({
      title,
      id,
    });
  };

  return (
    <article id={id} className={classes.movie}>
      <div className={classes['movie__poster-box']}>
        <img
          src={poster_path}
          alt={title}
          className={classes['movie__poster']}
        ></img>
      </div>

      <div className={classes['movie__detailes']}>
        <h3 className={classes['movie__title']}>
          {title}{' '}
          <span>
            ({release_date ? release_date.slice(0, 4) : 'Год неизвестен'})
          </span>
        </h3>
        <div className={classes['movie__rating']}>
          <StarIcon />
          {vote_average}
        </div>
        <p className={classes['movie__description']}>
          {overview ? overview : 'Описание недоступно'}...
        </p>
        <button className={classes['movie__btn']} onClick={addToQueueHandler}>
          Добавить в очередь
        </button>
      </div>
    </article>
  );
};

export default Movie;
