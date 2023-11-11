import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icon from '../atoms/icon';
import Image from '../atoms/image';
import { StoreCardInfo } from '../../types/store';
import { fetchWithHandler } from '../../utils/fetchWithHandler';
import { toggleStoreLike } from '../../apis/likedStore';
import { getRandomBlankImage } from '../../utils/image';

export default function StoreCard({
  storeId,
  storeName,
  category,
  numsOfReview,
  storeImage,
  ratingAvg,
  likedCard = false,
}: StoreCardInfo) {
  const { t } = useTranslation();
  const [like, setLike] = useState(likedCard);
  const navigate = useNavigate();
  const [image] = useState(storeImage || getRandomBlankImage());

  const handleToggleStoreLike = async () => {
    const token = localStorage.getItem('accessToken');

    if (token === null) {
      navigate('/login', {
        replace: true,
      });
    }

    await fetchWithHandler(async () => toggleStoreLike(token, storeId), {
      onSuccess: () => {
        setLike((prev) => !prev);
      },
      onError: () => {
        alert(t('toggleLike.error'));
      },
    });
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
          {category ? <p className="text-sm">{category.name}</p> : null}
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-[0.1875rem]">
              <span className="text-yellow-400">
                <Icon name="FillStar" size="1rem" ariaLabel={t('storeCard.rating')} />
              </span>
              {ratingAvg.toFixed(2)}
            </div>
            <div>
              {`${t('storeCard.review')} ${numsOfReview}`}
            </div>
          </div>
        </section>
      </Link>
      {likedCard ? (
        <button
          type="button"
          onClick={handleToggleStoreLike}
        >
          <Icon
            name={`${like ? 'FillHeart' : 'OutlineHeart'}`}
            color="text-matgpt-red"
            size="3rem"
            ariaLabel={t('likedStorePage.heartButton')}
          />
        </button>
      ) : ''}
    </div>
  );
}
