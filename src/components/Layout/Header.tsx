import React from 'react';
import classes from './Header.module.css';
import bg from '../../img/header-bg.jpg';
import HeaderAddButton from './HeaderAddButton';

interface HeaderProps {
  onToggleQueue: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onToggleQueue,
}): React.ReactElement => {
  return (
    <>
      <header className={classes.header}>
        <h1>Cinematic DB</h1>
        <HeaderAddButton onClick={onToggleQueue} type={'button'}>
          Очередь просмотра
        </HeaderAddButton>
      </header>
      <div className={classes['main-image']}>
        <img src={bg} alt='Movies' />
      </div>
    </>
  );
};

export default Header;
