import { Link } from 'react-router-dom';
import Icon from '../atoms/icon';
import Image from '../atoms/image';

interface RestaurantCardProps {
  storeId: number;
  storeName: string;
  category: string;
  review: string;
  image: string;
  reviewStar: number;
  reviewCount: number;
  averageCost: number;
}

export default function RestaurantCard({
  storeId,
  storeName,
  category,
  review,
  image,
  reviewStar,
  reviewCount,
  averageCost,
}: RestaurantCardProps) {
  return (
    <Link
      to={`/stores/${storeId}`}
      className="flex w-full items-center gap-4 p-2"
      aria-label={`${storeName} 상세 페이지로 이동`}
    >
      <div className="h-32 w-32">
        <Image
          imageSrc={image}
          alt={storeName}
          objectFitMode
          className="rounded-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <section className="flex h-full flex-col justify-between py-2 text-left">
        <h3 className="text-lg font-bold">{storeName}</h3>
        <p className="text-sm">{category}</p>
        <p className="font-bold">
          &ldquo;
          {review}
          &rdquo;
        </p>
        <div className="flex gap-3 text-xs">
          <div className="flex items-center gap-[0.1875rem]">
            <Icon name="OutlineStar" size="1rem" ariaLabel="별점" />
            {reviewStar}
          </div>
          <div>
            리뷰
            {' '}
            {reviewCount}
          </div>
          <div>
            평균
            {' '}
            {averageCost}
            {' '}
            원
          </div>
        </div>
      </section>
    </Link>
  );
}
