import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactModal from 'react-modal';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../atoms/button';
import { deleteReview } from '../../apis/review';

const customModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    zIndex: '10',
    top: '0',
    left: '0',
  },
  content: {
    width: '300px',
    height: '12rem',
    zIndex: '150',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    overflow: 'auto',
  },
};

function DeleteReviewModal({ modalOpen, setModalOpen }: {
  modalOpen: boolean,
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { t } = useTranslation();
  const { storeId, reviewId } = useParams();
  const navigate = useNavigate();

  function onCloseModalClick() {
    setModalOpen(false);
  }

  return (
    <ReactModal
      isOpen={modalOpen}
      style={customModalStyles}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      onRequestClose={() => { onCloseModalClick(); }}
    >
      <div className="w-full flex-col justify-center justify-items-center">
        <div className="text-center">{t('deleteReviewModal.deleteTitle')}</div>
        <div className="text-center font-bold text-matgpt-red">{t('deleteReviewModal.notRecovredTitle')}</div>
        <div className="mt-12 text-center">
          <Button size="medium" backgroundColor="bg-matgpt-gray" textColor="text-black" extraStyle="mr-8" onClick={() => { onCloseModalClick(); }}>
            {t('deleteReviewModal.cancel')}
          </Button>
          <Button
            size="medium"
            backgroundColor="bg-matgpt-red"
            textColor="text-black"
            onClick={() => {
              onCloseModalClick();
              if (storeId === undefined || reviewId === undefined) {
                return;
              }
              deleteReview(+storeId, +reviewId);
              navigate(`/stores/${storeId}`);
            }}
          >
            삭제
          </Button>
        </div>
      </div>
    </ReactModal>
  );
}

export default DeleteReviewModal;
