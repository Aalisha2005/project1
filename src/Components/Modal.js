import React from 'react';
import '../Assets/Modal.css';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay1" onClick={onClose}>
    <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
      <p className="close-button1" onClick={onClose}>X</p>
      {children}
    </div>
  </div>
  );
};

export default Modal;
