import { StoreDetail } from '../../types/store';
import Button from '../atoms/button';
import Icon from '../atoms/icon';
import Image from '../atoms/image';
import PageTitleCard from '../molecules/pageTitleCard';

interface StoreDetailTemplateProps {
  storeDetail: StoreDetail;
}

export default function StoreDetailTemplate({
  storeDetail,
}: StoreDetailTemplateProps) {
  return (
    <main>
      <PageTitleCard pageTitle="음식점 상세 페이지" />
      <div className="h-48 w-full">
        <Image
          imageSrc={storeDetail.image}
          alt={`${storeDetail.storeName} 이미지`}
          objectFitMode
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-1 p-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">{storeDetail.storeName}</h2>
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
              <div>{storeDetail.rating}</div>
            </div>
            <div className="flex items-center gap-1">
              <div>리뷰</div>
              <div>{storeDetail.reviewCount}</div>
            </div>
          </div>
          <Button>리뷰 쓰기</Button>
        </div>
      </div>
    </main>
  );
}
