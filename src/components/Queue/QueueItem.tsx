import React from 'react';
import classes from './QueueItem.module.css';

interface QueueItemProps {
  title: string;
  onRemove: () => void;
}

/**
 * @param title название фильма
 * @param onRemove функция для удаления фильма из очереди
 * @returns QueueItem Component
 */
const QueueItem: React.FC<QueueItemProps> = ({
  title,
  onRemove,
}): React.ReactElement => {
  return (
    <li className={classes['queue-item']}>
      <h2>{title}</h2>
      <div className={classes.actions}>
        <button onClick={onRemove}>Убрать</button>
      </div>
    </li>
  );
};

export default QueueItem;
