import Icon from '../atoms/icon';
import Image from '../atoms/image';

interface ReviewCardType {
  storeImage: string;
  storeName: string;
  profileImage: string;
  reviewer: string;
  reviewRating: string;
  memberNumber: string;
  whenIsDate: string;
}

function ReviewCard({
  storeImage, storeName, profileImage, reviewer, reviewRating, memberNumber, whenIsDate,
}:ReviewCardType) {
  return (
    <div className="flex">
      <div className="mr-2">
        <Image imageSrc={storeImage} alt="맛집 이미지" threshold={{ smallToMedium: '0', mediumToLarge: '0' }} />
      </div>
      <div className="w-[20rem] py-1">
        <div>
          <span className="font-bold">{storeName}</span>
        </div>
        <div className="flex items-center py-1">
          <Image imageSrc={profileImage} alt="유저이미지" threshold={{ smallToMedium: '0', mediumToLarge: '0' }} className="w-[2.5rem] pr-2" />
          <span>{reviewer}</span>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <Icon name="OutlineStar" size="1.5rem" ariaLabel="평점 점수" />
            <span className="pl-1 pr-3">{reviewRating}</span>
            <Icon name="UserGroup" size="1.2rem" ariaLabel="인원 수" />
            <span className="pl-1">{memberNumber}</span>
          </div>
          <span>{whenIsDate}</span>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
