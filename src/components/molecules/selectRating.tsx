import { Dispatch, SetStateAction } from 'react';
import Icon from '../atoms/icon';

interface SelectRatingProps {
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
}

export default function SelectRating({
  rating,
  setRating,
}: SelectRatingProps) {
  return (
    <>
      <div>가게에 대한 평점을 남겨주세요.</div>
      <div className="flex justify-center gap-1 text-yellow-400">
        <button
          type="button"
          onClick={() => setRating(1)}
          title="평점 1점 남기기"
          tabIndex={0}
        >
          {rating >= 1
            ? <Icon name="FillStar" size="2rem" ariaLabel="" />
            : <Icon name="OutlineStar" size="2rem" ariaLabel="" />}
        </button>
        <button
          type="button"
          onClick={() => setRating(2)}
          title="평점 2점 남기기"
          tabIndex={0}
        >
          {rating >= 2
            ? <Icon name="FillStar" size="2rem" ariaLabel="" />
            : <Icon name="OutlineStar" size="2rem" ariaLabel="" />}
        </button>
        <button
          type="button"
          onClick={() => setRating(3)}
          title="평점 3점 남기기"
          tabIndex={0}
        >
          {rating >= 3
            ? <Icon name="FillStar" size="2rem" ariaLabel="" />
            : <Icon name="OutlineStar" size="2rem" ariaLabel="" />}
        </button>
        <button
          type="button"
          onClick={() => setRating(4)}
          title="평점 4점 남기기"
          tabIndex={0}
        >
          {rating >= 4
            ? <Icon name="FillStar" size="2rem" ariaLabel="" />
            : <Icon name="OutlineStar" size="2rem" ariaLabel="" />}
        </button>
        <button
          type="button"
          onClick={() => setRating(5)}
          title="평점 5점 남기기"
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
