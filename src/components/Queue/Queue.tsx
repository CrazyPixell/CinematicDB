import React, { useContext } from 'react';
import classes from './Queue.module.css';
import Modal from '../UI/Modal';
import QueueContext from '../../store/queue-context';
import QueueItem from './QueueItem';
import { MovieInterface } from '../../interfaces/MovieInterface';

interface QueueProps {
  onToggleQueue: () => void;
}

const Queue: React.FC<QueueProps> = ({ onToggleQueue }): React.ReactElement => {
  const queueContext = useContext(QueueContext);

  const removeItemHandler = (item: MovieInterface): void => {
    queueContext.removeItem({ ...item });
  };

  const cartItems = (
    <ul className={classes['queue-items']}>
      {queueContext.items.map((item: MovieInterface) => (
        <QueueItem
          key={item.id}
          title={item.title}
          onRemove={removeItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onToggleCart={onToggleQueue}>
      {cartItems}
      <div className={classes.actions}>
        <button onClick={onToggleQueue} className={classes['button--alt']}>
          Закрыть
        </button>
      </div>
    </Modal>
  );
};

export default Queue;
