import React, { useContext } from 'react';
import classes from './Queue.module.css';
import Modal from '../UI/Modal';
import QueueContext from '../../store/queue-context';
import QueueItem from './QueueItem';

const Queue = props => {
  const queueContext = useContext(QueueContext);

  const removeItemHandler = item => {
    queueContext.removeItem({ ...item });
  };

  const addItemHandler = item => {
    queueContext.addItem({ ...item });
  };

  const cartItems = (
    <ul className={classes['queue-items']}>
      {queueContext.items.map(item => (
        <QueueItem
          key={item.id}
          name={item.name}
          onRemove={removeItemHandler.bind(null, item)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onToggleCart={props.onToggleQueue}>
      {cartItems}
      <div className={classes.actions}>
        <button
          onClick={props.onToggleQueue}
          className={classes['button--alt']}
        >
          Закрыть
        </button>
      </div>
    </Modal>
  );
};

export default Queue;
