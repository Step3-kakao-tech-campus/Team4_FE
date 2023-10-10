import React, { useState } from 'react';
import ReactModal from 'react-modal';
import SocialLoginModalContent from './organisms/socialLoginModalContent';

const customModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100vh',
    zIndex: '10',
    position: 'fixed',
    top: '0',
    left: '0',
  },
  content: {
    width: '300px',
    height: '360px',
    zIndex: '150',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    overflow: 'auto',
  },
};

function SocialLoginModal() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <ReactModal
      isOpen={modalOpen}
      style={customModalStyles}
      onRequestClose={() => setModalOpen(false)}
    >
      <SocialLoginModalContent onCloseModalClick={() => { setModalOpen(false); }} />
    </ReactModal>
  );
}

export default SocialLoginModal;
