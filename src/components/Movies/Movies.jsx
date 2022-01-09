import React, { useState } from 'react';
import Summary from './Summary.jsx';
import AvailableMovies from './AvailableMovies.jsx';
import SearchForm from '../UI/SearchForm';

const Movies = props => {
  const [searchResult, setSearchResult] = useState('Star');

  const searchNameHandler = name => {
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
