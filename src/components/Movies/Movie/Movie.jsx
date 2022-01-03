import React, { useContext } from 'react';
import classes from './Movie.module.css';
import QueueContext from '../../../store/queue-context';
import StarIcon from '../../UI/StarIcon';

const Movie = props => {
  const queueContext = useContext(QueueContext);

  const addToQueueHandler = () => {
    queueContext.addItem({
      name: props.name,
      id: props.id,
    });
  };

  return (
    <article id={props.id} className={classes.movie}>
      <div className={classes['movie__poster-box']}>
        <img
          src={props.poster}
          alt={props.name}
          className={classes['movie__poster']}
        ></img>
      </div>

      <div className={classes['movie__detailes']}>
        <h3 className={classes['movie__title']}>
          {props.name}{' '}
          <span>
            ({props.year ? props.year.slice(0, 4) : 'Год неизвестен'})
          </span>
        </h3>
        <div className={classes['movie__rating']}>
          <StarIcon />
          {props.rating}
        </div>
        <p className={classes['movie__description']}>
          {props.summary ? props.summary : 'Описание недоступно'}...
        </p>
        <button className={classes['movie__btn']} onClick={addToQueueHandler}>
          Добавить в очередь
        </button>
      </div>
    </article>
  );
};

export default Movie;
