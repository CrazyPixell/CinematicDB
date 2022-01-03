import React, { useReducer } from 'react';
import QueueContext from './queue-context';

const defaultQueueState = {
  items: [],
};

const queueReducer = (state, action) => {
  if (action.type === 'ADD') {
    const existingQueueItemIndex = state.items.findIndex(
      item => item.name === action.item.name
    );

    const existingQueueItem = state.items[existingQueueItemIndex];
    let updatedItems;

    if (existingQueueItem) {
      const updatedItem = {
        ...existingQueueItem,
      };
      updatedItems = [...state.items];
      updatedItems[existingQueueItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
    };
  }

  if (action.type === 'REMOVE') {
    const existingQueueItemIndex = state.items.findIndex(
      item => item.id === action.item.id
    );

    const existingItem = state.items[existingQueueItemIndex];

    let updatedItems;
    if (existingItem.id === action.item.id) {
      updatedItems = state.items.filter(item => item.id !== action.item.id);
    }

    return {
      items: updatedItems,
    };
  }
  return defaultQueueState;
};

const QueueProvider = props => {
  const [queueState, dispatchQueueState] = useReducer(
    queueReducer,
    defaultQueueState
  );

  const addItemToQueueHandler = item => {
    dispatchQueueState({
      type: 'ADD',
      item: item,
    });
  };
  const removeItemFromQueueHandler = item => {
    dispatchQueueState({
      type: 'REMOVE',
      item: item,
    });
  };

  const queueContext = {
    items: queueState.items,
    addItem: addItemToQueueHandler,
    removeItem: removeItemFromQueueHandler,
  };

  return (
    <QueueContext.Provider value={queueContext}>
      {props.children}
    </QueueContext.Provider>
  );
};

export default QueueProvider;
