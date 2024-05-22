// Modal.js
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

const CustomModal = ({ isOpen, closeModal, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Popup Message"
    >
      <h2>{message}</h2>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default CustomModal;
