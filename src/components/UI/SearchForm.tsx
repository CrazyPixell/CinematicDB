import React, { ChangeEvent, useState } from 'react';
import Input from './Input';
import classes from './SearchForm.module.css';

interface SearchFormProps {
  onSearchName: (name: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  onSearchName,
}): React.ReactElement => {
  const [enteredName, setEnteredName] = useState<string>('');

  const nameInputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setEnteredName(e.target.value);
  };

  const submitNameHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSearchName(enteredName);
    setEnteredName('');
  };

  return (
    <form onSubmit={submitNameHandler} className={classes.search}>
      <Input
        type={'text'}
        id={'search-movie'}
        label={'Ищи фильмы'}
        placeholder={'Название?'}
        onChange={nameInputHandler}
        value={enteredName}
      />
      <button className={classes['search__btn']}>Поиск</button>
    </form>
  );
};

export default SearchForm;
