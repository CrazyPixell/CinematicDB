import React, { useState } from 'react';
import Header from './components/Layout/Header.jsx';
import Movies from './components/Movies/Movies.jsx';
import Queue from './components/Queue/Queue.jsx';
import QueueProvider from './store/QueueProvider.jsx';

function App() {
  const [openQueue, setOpenQueue] = useState(false);

  const toggleQueueHandler = () => {
    !openQueue && setOpenQueue(true);
    openQueue && setOpenQueue(false);
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
