import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../atoms/icon';

interface SelectRatingProps {
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
}

export default function SelectRating({
  rating,
  setRating,
}: SelectRatingProps) {
  const { t } = useTranslation();
  return (
    <>
      <div>{t('writeReviewPage.d1')}</div>
      <div className="flex justify-center gap-1 text-yellow-400">
        <button
          type="button"
          onClick={() => setRating(1)}
          title={`${t('writeReviewPage.rating')} 1 ${rating === 1 ? t('writeReviewPage.selected') : ''}`}
          tabIndex={0}
        >
          {rating >= 1
            ? <Icon name="FillStar" size="2rem" ariaLabel="" />
            : <Icon name="OutlineStar" size="2rem" ariaLabel="" />}
        </button>
        <button
          type="button"
          onClick={() => setRating(2)}
          title={`${t('writeReviewPage.rating')} 2 ${rating === 2 ? t('writeReviewPage.selected') : ''}`}
          tabIndex={0}
        >
          {rating >= 2
            ? <Icon name="FillStar" size="2rem" ariaLabel="" />
            : <Icon name="OutlineStar" size="2rem" ariaLabel="" />}
        </button>
        <button
          type="button"
          onClick={() => setRating(3)}
          title={`${t('writeReviewPage.rating')} 3 ${rating === 3 ? t('writeReviewPage.selected') : ''}`}
          tabIndex={0}
        >
          {rating >= 3
            ? <Icon name="FillStar" size="2rem" ariaLabel="" />
            : <Icon name="OutlineStar" size="2rem" ariaLabel="" />}
        </button>
        <button
          type="button"
          onClick={() => setRating(4)}
          title={`${t('writeReviewPage.rating')} 4 ${rating === 4 ? t('writeReviewPage.selected') : ''}`}
          tabIndex={0}
        >
          {rating >= 4
            ? <Icon name="FillStar" size="2rem" ariaLabel="" />
            : <Icon name="OutlineStar" size="2rem" ariaLabel="" />}
        </button>
        <button
          type="button"
          onClick={() => setRating(5)}
          title={`${t('writeReviewPage.rating')} 5 ${rating === 5 ? t('writeReviewPage.selected') : ''}`}
          tabIndex={0}
        >
          {rating >= 5
            ? <Icon name="FillStar" size="2rem" ariaLabel="" />
            : <Icon name="OutlineStar" size="2rem" ariaLabel="" />}
        </button>
      </div>
    </>
  );
}
