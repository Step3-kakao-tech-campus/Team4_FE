import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../atoms/icon';

interface TagRatingProps {
  rating: number;
}

export default function TagRating({ rating }: TagRatingProps) {
  const { t } = useTranslation();

  const RenderRating = useCallback(() => {
    const list = [];

    if (rating < 0) {
      for (let i = 0; i > rating; i -= 1) {
        list.push(
          <Icon name="FillDislike" size="1rem" ariaLabel={t('menuTag.dislike')} />,
        );
      }
    } else if (rating > 0) {
      for (let i = 0; i < rating; i += 1) {
        list.push(
          <Icon name="FillLike" size="1rem" ariaLabel={t('menuTag.like')} />,
        );
      }
    }

    return <div className="flex items-center gap-[2px]">{list}</div>;
  }, [rating]);

  return (
    <RenderRating />
  );
}
