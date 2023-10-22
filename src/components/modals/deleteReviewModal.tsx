import { useTranslation } from 'react-i18next';
import Button from '../atoms/button';

function DeleteReviewModal() {
  const { t } = useTranslation();

  function handleDeleteReview() {

  }

  return (
    <div className="flex h-48 w-[300px] flex-col
      justify-center justify-items-center rounded-[10px] bg-white"
    >
      <div className="text-center">{t('deleteReviewModal.deleteTitle')}</div>
      <div className="text-center font-bold text-matgpt-red">{t('deleteReviewModal.notRecovredTitle')}</div>
      <div className="mt-12 text-center">
        <Button
          size="medium"
          backgroundColor="bg-matgpt-gray"
          textColor="text-black"
          extraStyle="mr-8"
          onClick={() => {
            window.location.hash = '';
          }}
        >
          {t('deleteReviewModal.cancel')}
        </Button>
        <Button
          size="medium"
          backgroundColor="bg-matgpt-red"
          textColor="text-black"
          onClick={() => {
            handleDeleteReview();
            //  백앤드로 리뷰 삭제 요청을 보낸다.
          }}
        >
          삭제
        </Button>
      </div>
    </div>
  );
}

export default DeleteReviewModal;
