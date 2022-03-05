import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Movies from './components/Movies/Movies';
import Queue from './components/Queue/Queue';
import QueueProvider from './store/QueueProvider';

function App() {
  const [openQueue, setOpenQueue] = useState<boolean>(false);

  const toggleQueueHandler = (): void => {
    setOpenQueue(!openQueue);
  };

  return (
    <QueueProvider>
      {openQueue && <Queue onToggleQueue={toggleQueueHandler} />}
      <Header onToggleQueue={toggleQueueHandler} />
      <main>
        <Movies />
      </main>
    </QueueProvider>
  );
}

export default App;
