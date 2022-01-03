import React from 'react';
import classes from './QueueItem.module.css';

const QueueItem = props => {
  return (
    <li className={classes['queue-item']}>
      <h2>{props.name}</h2>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>Убрать</button>
      </div>
    </li>
  );
};

export default QueueItem;
