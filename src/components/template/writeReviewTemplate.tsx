import {
  Dispatch, SetStateAction, forwardRef, useImperativeHandle, useRef,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../atoms/button';
import Input from '../atoms/input';
import PageTitleCard from '../molecules/pageTitleCard';
import SelectRating from '../molecules/selectRating';
import UploadImage from '../organisms/uploadImage';
import { RefHandler, WriteReviewRefHandler } from '../../types/refHandler';

interface WriteReviewTemplateProps {
  storeId: number;
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
  reviewImages: Blob[];
  setReviewImages: Dispatch<SetStateAction<Blob[]>>;
  handleWriteReview: () => void;
}

const WriteReviewTemplate = forwardRef<WriteReviewRefHandler, WriteReviewTemplateProps>((
  {
    storeId,
    rating,
    setRating,
    reviewImages,
    setReviewImages,
    handleWriteReview,
  },
  ref,
) => {
  const contentRef = useRef<RefHandler>(null);
  const peopleCountRef = useRef<RefHandler>(null);
  const totalPriceRef = useRef<RefHandler>(null);
  const { t } = useTranslation();

  const navigate = useNavigate();

  useImperativeHandle(ref, () => ({
    getContent: () => contentRef.current?.getInputValue(),
    getPeopleCount: () => peopleCountRef.current?.getInputValue(),
    getTotalPrice: () => totalPriceRef.current?.getInputValue(),
  }));

  return (
    <main className="pb-[3.7rem]">
      <PageTitleCard pageTitle={t('writeReviewPage.title')} />
      <UploadImage
        reviewImages={reviewImages}
        setReviewImages={setReviewImages}
      />
      <div className="flex flex-col gap-4 p-4 text-center">
        <SelectRating
          rating={rating}
          setRating={setRating}
        />
        <div>
          {t('writeReviewPage.d2')}
        </div>
        <div className="h-80">
          <Input
            mode="multiLine"
            ref={contentRef}
          />
        </div>
        <div className="flex flex-col items-center">
          <div>{t('writeReviewPage.d3')}</div>
          <div className="flex w-36 items-center gap-2">
            <Input
              mode="number"
              ref={peopleCountRef}
            />
            {t('writeReviewPage.people')}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>{t('writeReviewPage.d4')}</div>
          <div className="flex w-52 items-center gap-2">
            <Input
              mode="number"
              ref={totalPriceRef}
            />
            {t('writeReviewPage.won')}
          </div>
        </div>
        <div className="flex justify-between">
          <Button
            backgroundColor="bg-matgpt-gray"
            onClick={() => {
              navigate(`/stores/${storeId}`);
            }}
          >
            {t('writeReviewPage.cancel')}
          </Button>
          <Button onClick={() => handleWriteReview()}>
            {t('writeReviewPage.finish')}
          </Button>
        </div>
      </div>
    </main>
  );
});

export default WriteReviewTemplate;
