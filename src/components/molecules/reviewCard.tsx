import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icon from '../atoms/icon';
import Image from '../atoms/image';

interface ReviewCardType {
  storeImage: string;
  storeName: string;
  profileImage: string;
  reviewerName: string;
  reviewRating: number;
  memberNumber: number;
  createdAt: string;
}

function ReviewCard({
  storeImage, storeName, profileImage, reviewerName, reviewRating, memberNumber, createdAt,
}:ReviewCardType) {
  const { t } = useTranslation();
  const storeId = 1;
  const reviewId = 2;
  return (
    <Link
      to={`/stores/${storeId}/reviews/${reviewId}`}
      className="flex w-full items-center gap-4 p-2"
      aria-label={`${storeName} ${t('reviewCard.linkToReview')}`}
    >
      <div className="flex">
        <div className="mr-2 h-34 w-26">
          <Image imageSrc={storeImage} alt={t('reviewCard.storeImage')} threshold={{ smallToMedium: '0', mediumToLarge: '0' }} />
        </div>
        <div className="w-[20rem]">
          <div>
            <span className="font-bold h-[0.1rem] overflow-hidden">{storeName}</span>
          </div>
          <div className="flex items-center py-2">
            <div className="w-[2.5rem] h-[31.901px] ">
              <Image imageSrc={profileImage} alt={t('reviewCard.userImage')} threshold={{ smallToMedium: '0', mediumToLarge: '0' }} className="pr-2" />
            </div>
            <span className="h-[1.5rem] overflow-hidden">{reviewerName}</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <Icon name="OutlineStar" size="1.5rem" ariaLabel={t('reviewCard.ratingIcon')} />
              <span className="pl-1 pr-3">{reviewRating}</span>
              <Icon name="UserGroup" size="1.2rem" ariaLabel={t('reviewCard.memberNumIcon')} />
              <span className="pl-1">
                {memberNumber}
                명
              </span>
            </div>
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ReviewCard;
