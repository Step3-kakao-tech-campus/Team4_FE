import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import Icon from '../atoms/icon';
import Image from '../atoms/image';
import { StoreCardInfo } from '../../types/store';

export default function LikedStoreCard({
  storeId,
  storeName,
  category,
  review,
  image,
  rating,
  reviewCount,
}: StoreCardInfo) {
  const { t } = useTranslation();
  const [like, setLike] = useState(true);

  const onClickLikeStoreHandler = () => {
    if (like === true) {
      // 백앤드 서버에 가게 좋아요 취소 api 요청
      setLike(() => false);
    } else {
      // 백앤드 서버에 가게 좋아요 api 요청
      setLike(() => true);
    }
  };

  return (
    <div className="flex items-center">
      <Link
        to={`/stores/${storeId}`}
        className="flex w-full items-center gap-4 p-2"
        aria-label={`${storeName} ${t('storeCard.moveDetail')}`}
      >
        <div className="h-28 w-28">
          <Image
            imageSrc={image}
            alt={storeName}
            objectFitMode
            className="rounded-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <section className="flex h-full flex-col gap-[0.375rem] text-left">
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
              {rating}
            </div>
            <div>
              {`${t('storeCard.review')} ${reviewCount}`}
            </div>
          </div>
        </section>
      </Link>
      <button
        type="button"
        onClick={() => {
          onClickLikeStoreHandler();
        }}
      >
        <AiFillHeart className={like ? 'text-matgpt-red' : 'text-matgpt-red opacity-20'} size="3rem" aria-label="가게 좋아요 버튼" />
      </button>
    </div>
  );
}
