import { useCallback } from 'react';
import Icon from '../atoms/icon';

interface TagRatingProps {
  rating: number;
}

export default function TagRating({ rating }: TagRatingProps) {
  const RenderRating = useCallback(() => {
    const list = [];

    if (rating < 0) {
      for (let i = 0; i > rating; i -= 1) {
        list.push(
          <Icon name="FillDislike" size="1rem" ariaLabel="싫어요" />,
        );
      }
    } else if (rating > 0) {
      for (let i = 0; i < rating; i += 1) {
        list.push(
          <Icon name="FillLike" size="1rem" ariaLabel="좋아요" />,
        );
      }
    }

    return <div className="flex items-center gap-[2px]">{list}</div>;
  }, [rating]);

  return (
    <RenderRating />
  );
}
