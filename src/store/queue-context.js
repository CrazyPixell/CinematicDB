import React from 'react';

const QueueContext = React.createContext({
  items: [],
  addItem: item => {},
  removeItem: id => {},
});

export default QueueContext;
