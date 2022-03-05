import React, { useContext, useEffect, useState } from 'react';
import classes from './HeaderAddButton.module.css';
import PopcornIcon from '../UI/PopcornIcon.jsx';
import QueueContext from '../../store/queue-context';

interface HeaderAddButtonProps {
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

const HeaderAddButton: React.FC<HeaderAddButtonProps> = ({
  onClick,
  type,
  children,
}): React.ReactElement => {
  const [btnState, setBtnState] = useState<boolean>(false);

  const queueContext = useContext(QueueContext);

  const queueItemsAmount = queueContext.items.length;

  const { items } = queueContext;

  const btnClasses = `${classes.button} ${btnState ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnState(true);
    const timer = setTimeout(() => setBtnState(false), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={onClick} type={type} className={btnClasses}>
      <span className={classes.icon}>
        <PopcornIcon />
      </span>
      <span>{children}</span>
      <span className={classes.badge}>{queueItemsAmount}</span>
    </button>
  );
};

export default HeaderAddButton;
