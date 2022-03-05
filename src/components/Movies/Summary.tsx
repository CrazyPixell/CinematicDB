import React from 'react';
import classes from './Summary.module.css';

interface SummaryProps {}

/**
 * @returns Summary Component
 */
const Summary: React.FC<SummaryProps> = (): React.ReactElement => {
  return (
    <section className={classes.summary}>
      <h2>Ищите свои любимые фильмы</h2>
      <p>Выбирайте из огромной коллекции фильмов,</p>
      <p>и добавляйте в очередь просмотров, чтобы не забыть.</p>
    </section>
  );
};

export default Summary;
