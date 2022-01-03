import React, { useState } from 'react';
import Input from './Input';
import classes from './SearchForm.module.css';

const SearchForm = props => {
  const [enteredName, setEnteredName] = useState();

  const nameInputHandler = e => {
    setEnteredName(e.target.value);
  };

  const submitNameHandler = e => {
    e.preventDefault();
    props.onSearchName(enteredName);
  };

  return (
    <form onSubmit={submitNameHandler} className={classes.search}>
      <Input
        type={'text'}
        id={'search-movie'}
        label={'Ищи фильмы'}
        placeholder={'Название?'}
        onChange={nameInputHandler}
      />
      <button className={classes['search__btn']}>Поиск</button>
    </form>
  );
};

export default SearchForm;
