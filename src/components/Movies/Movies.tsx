import React, { useState } from 'react';
import Summary from './Summary';
import AvailableMovies from './AvailableMovies';
import SearchForm from '../UI/SearchForm';

interface MoviesProps {}

const Movies: React.FC<MoviesProps> = (): React.ReactElement => {
  const [searchResult, setSearchResult] = useState<string>('Star');

  const searchNameHandler = (name: string): void => {
    setSearchResult(name);
  };

  return (
    <React.Fragment>
      <Summary />
      <SearchForm onSearchName={searchNameHandler} />
      <AvailableMovies searchResult={searchResult} />
    </React.Fragment>
  );
};

export default Movies;
