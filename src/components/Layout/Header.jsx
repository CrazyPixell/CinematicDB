import React from 'react';
import classes from './Header.module.css';
import bg from '../../img/header-bg.jpg';
import HeaderAddButton from './HeaderAddButton';

const Header = props => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Cinematic DB</h1>
        <HeaderAddButton onClick={props.onToggleQueue} type={'button'}>
          Очередь просмотра
        </HeaderAddButton>
      </header>
      <div className={classes['main-image']}>
        <img src={bg} alt='Movies' />
      </div>
    </React.Fragment>
  );
};

export default Header;
