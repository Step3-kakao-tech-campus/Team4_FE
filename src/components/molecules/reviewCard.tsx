import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Icon from '../atoms/icon';
import Image from '../atoms/image';
import { ReviewCardInfo } from '../../types/review';
import useElapsedDate from '../../hooks/convert';
import { getRandomBlankImage } from '../../utils/image';

function ReviewCard({
  storeId, reviewId, rating, imageUrl, content, createdAt, numOfLikes, updated,
}: ReviewCardInfo) {
  const { t } = useTranslation();
  const [image] = useState(imageUrl || getRandomBlankImage());

  const elapsedDate = useElapsedDate({ dateString: createdAt });

  return (
    <Link
      to={`/stores/${storeId}/reviews/${reviewId}`}
      className="w-full p-2"
      aria-label={`${t('reviewCard.linkToReview')}`}
    >
      <div className="flex h-28">
        <div className="mr-2 h-28 w-28">
          <Image imageSrc={image} alt={t('reviewCard.storeImage')} className="rounded-full object-cover" objectFitMode />
        </div>
        <div className="flex w-[20rem] flex-col justify-between py-2">
          <div className="truncate">
            {content}
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <span className="text-yellow-400">
                <Icon name="FillStar" size="1.5rem" ariaLabel={t('reviewCard.ratingIcon')} />
              </span>
              <span className="pl-1 pr-3">{rating}</span>
              <span className="text-matgpt-red">
                <Icon name="FillHeart" size="1.2rem" ariaLabel={t('reviewCard.memberNumIcon')} />
              </span>
              <span className="pl-1">
                {numOfLikes}
              </span>
            </div>
            <span>
              {elapsedDate}
              {updated ? (
                <span>
                  {' '}
                  (수정됨)
                </span>
              ) : null}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ReviewCard;
