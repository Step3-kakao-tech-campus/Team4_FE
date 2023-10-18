import { Link } from 'react-router-dom';
import Button from '../atoms/button';
import Icon from '../atoms/icon';
import Image from '../atoms/image';
import PageTitleCard from './pageTitleCard';

interface StoreDetailHeaderProps {
  storeId: number;
  storeName: string;
  storeImage: string;
  rating: number;
  reviewCount: number;
}

export default function StoreDetailHeader({
  storeId,
  storeName,
  storeImage,
  rating,
  reviewCount,
}: StoreDetailHeaderProps) {
  return (
    <>
      <PageTitleCard pageTitle="음식점 상세 페이지" />
      <div className="h-48 w-full">
        <Image
          imageSrc={storeImage}
          alt={`${storeName} 이미지`}
          objectFitMode
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-1 p-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">{storeName}</h2>
          <button type="button">
            <Icon
              name="OutlineHeart"
              size="1.4rem"
              ariaLabel="좋아요 한 식당에 추가"
            />
          </button>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <Icon
                name="OutlineStar"
                size="1.4rem"
                ariaLabel="별점"
              />
              <div>{rating}</div>
            </div>
            <div className="flex items-center gap-1">
              <div>리뷰</div>
              <div>{reviewCount}</div>
            </div>
          </div>
          <Link to={`/stores/${storeId}/writeReview`}>
            <Button>리뷰 쓰기</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
