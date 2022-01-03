import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

const overlays = document.getElementById('overlays');

const Modal = props => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onToggleCart} />,
        overlays
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlays
      )}
    </React.Fragment>
  );
};

export default Modal;
