import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icon from '../atoms/icon';
import Image from '../atoms/image';

interface StoreCardProps {
  storeId: number;
  storeName: string;
  category: string;
  review: string;
  image: string;
  reviewStar: number;
  reviewCount: number;
}

export default function StoreCard({
  storeId,
  storeName,
  category,
  review,
  image,
  reviewStar,
  reviewCount,
}: StoreCardProps) {
  const { t } = useTranslation();

  return (
    <Link
      to={`/stores/${storeId}`}
      className="flex w-full items-center gap-4 p-2"
      aria-label={t('storeCard.moveDetail')}
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
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-[0.1875rem]">
            <Icon name="OutlineStar" size="1rem" ariaLabel={t('storeCard.rating')} />
            {reviewStar}
          </div>
          <div>
            {`${t('storeCard.review')} ${reviewCount}`}
          </div>
        </div>
      </section>
    </Link>
  );
}
