import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../atoms/icon';

interface SelectTagLikesProps {
  rating: number;
  setRating: Dispatch<SetStateAction<number>>
}

export default function SelectTagRating({
  rating,
  setRating,
}: SelectTagLikesProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row gap-1 text-white">
      <button type="button" onClick={() => setRating(-3)}>
        <Icon name={rating <= -3 ? 'FillDislike' : 'OutlineDislike'} size="1.1rem" ariaLabel={`${t('menuTag.dislike')} 3`} />
      </button>
      <button type="button" onClick={() => setRating(-2)}>
        <Icon name={rating <= -2 ? 'FillDislike' : 'OutlineDislike'} size="1.1rem" ariaLabel={`${t('menuTag.dislike')} 2`} />
      </button>
      <button type="button" onClick={() => setRating(-1)}>
        <Icon name={rating <= -1 ? 'FillDislike' : 'OutlineDislike'} size="1.1rem" ariaLabel={`${t('menuTag.dislike')} 1`} />
      </button>
      <button type="button" onClick={() => setRating(0)}>
        <Icon name={rating === 0 ? 'Ellipse' : 'EllipseOutline'} size="1.1rem" ariaLabel={t('menuTag.soso')} />
      </button>
      <button type="button" onClick={() => setRating(1)}>
        <Icon name={rating >= 1 ? 'FillLike' : 'OutlineLike'} size="1.1rem" ariaLabel={`${t('menuTag.like')} 1`} />
      </button>
      <button type="button" onClick={() => setRating(2)}>
        <Icon name={rating >= 2 ? 'FillLike' : 'OutlineLike'} size="1.1rem" ariaLabel={`${t('menuTag.like')} 2`} />
      </button>
      <button type="button" onClick={() => setRating(3)}>
        <Icon name={rating >= 3 ? 'FillLike' : 'OutlineLike'} size="1.1rem" ariaLabel={`${t('menuTag.like')} 3`} />
      </button>
    </div>
  );
}
