import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icon from '../atoms/icon';
import Image from '../atoms/image';
import { ReviewCardInfo } from '../../types/review';
import useElapsedDate from '../../hooks/convert';

function ReviewCard({
  storeId, reviewId, rating, imageUrls, content, createdAt, numOfLikes, updated,
}: ReviewCardInfo) {
  const { t } = useTranslation();

  const elapsedDate = useElapsedDate({ dateString: createdAt });

  return (
    <Link
      to={`/stores/${storeId}/reviews/${reviewId}`}
      className="w-full p-2"
      aria-label={`${t('reviewCard.linkToReview')}`}
    >
      <div className="flex">
        <div className="mr-2 h-28 w-28">
          <Image imageSrc={imageUrls} alt={t('reviewCard.storeImage')} className="rounded-full object-cover" objectFitMode />
        </div>
        <div className="flex w-[20rem] flex-col justify-between py-2">
          <div>
            {content}
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <Icon name="OutlineStar" size="1.5rem" ariaLabel={t('reviewCard.ratingIcon')} />
              <span className="pl-1 pr-3">{rating}</span>
              <Icon name="FillHeart" size="1.2rem" ariaLabel={t('reviewCard.memberNumIcon')} />
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
