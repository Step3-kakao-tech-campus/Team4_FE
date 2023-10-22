import { useState } from 'react';
import Icon from '../atoms/icon';

export default function SelectRating() {
  const [rating, setRating] = useState(5);

  return (
    <div>
      <div className="text-center">가게에 대한 리뷰를 작성해주세요.</div>
      <div className="flex justify-center gap-1 text-yellow-400">
        <button
          type="button"
          onClick={() => setRating(1)}
        >
          {rating >= 1
            ? <Icon name="FillStar" size="2rem" ariaLabel="" />
            : <Icon name="OutlineStar" size="2rem" ariaLabel="" />}
        </button>
        <button
          type="button"
          onClick={() => setRating(2)}
        >
          {rating >= 2
            ? <Icon name="FillStar" size="2rem" ariaLabel="" />
            : <Icon name="OutlineStar" size="2rem" ariaLabel="" />}
        </button>
        <button
          type="button"
          onClick={() => setRating(3)}
        >
          {rating >= 3
            ? <Icon name="FillStar" size="2rem" ariaLabel="" />
            : <Icon name="OutlineStar" size="2rem" ariaLabel="" />}
        </button>
        <button
          type="button"
          onClick={() => setRating(4)}
        >
          {rating >= 4
            ? <Icon name="FillStar" size="2rem" ariaLabel="" />
            : <Icon name="OutlineStar" size="2rem" ariaLabel="" />}
        </button>
        <button
          type="button"
          onClick={() => setRating(5)}
        >
          {rating >= 5
            ? <Icon name="FillStar" size="2rem" ariaLabel="" />
            : <Icon name="OutlineStar" size="2rem" ariaLabel="" />}
        </button>
      </div>
    </div>
  );
}
