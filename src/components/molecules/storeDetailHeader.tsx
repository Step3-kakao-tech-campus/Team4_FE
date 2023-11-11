import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Button from '../atoms/button';
import Icon from '../atoms/icon';
import Image from '../atoms/image';
import PageTitleCard from './pageTitleCard';
import { fetchWithHandler } from '../../utils/fetchWithHandler';
import { toggleStoreLike } from '../../apis/likedStore';
import { checkLikedStore } from '../../apis/checkLike';

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
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [like, setLike] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token !== null) {
      fetchWithHandler(async () => checkLikedStore(token, storeId), {
        onSuccess: (response) => {
          const isLiked = response?.data.data.hasLiked;
          if (isLiked === true) {
            setLike(true);
          }
        },
        onError: (error) => {
          console.error(error);
        },
      });
    }
  }, []);

  const handleClickWriteReview = () => {
    if (localStorage.getItem('accessToken') === null) {
      localStorage.setItem('previouseUrl', `/stores/${storeId}`);
      navigate('/login');
    } else {
      navigate(`/stores/${storeId}/writeReview`);
    }
  };

  const handleToggleStoreLike = async () => {
    const token = localStorage.getItem('accessToken');

    if (token === null) {
      navigate('/login', {
        replace: true,
      });
    } else {
      await fetchWithHandler(async () => toggleStoreLike(token, storeId), {
        onSuccess: () => {
          setLike((prev) => !prev);
        },
        onError: () => {
          alert(t('toggleLike.error'));
        },
      });
    }
  };

  return (
    <>
      <PageTitleCard pageTitle={t('storeDetail.pageTitle')} />
      <div className="h-48 w-full">
        <Image
          imageSrc={storeImage}
          alt={`${storeName} ${t('storeDetail.image')}`}
          objectFitMode
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-1 p-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">{storeName}</h2>
          <button
            type="button"
            className="text-matgpt-red"
            onClick={handleToggleStoreLike}
          >
            <Icon
              name={`${like ? 'FillHeart' : 'OutlineHeart'}`}
              size="1.4rem"
              ariaLabel={t('storeDetail.addLikedStore')}
            />
          </button>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">
                <Icon
                  name="FillStar"
                  size="1.4rem"
                  ariaLabel={t('storeDetail.rating')}
                />
              </span>
              <div>{rating}</div>
            </div>
            <div className="flex items-center gap-1">
              <div>{t('storeDetail.review')}</div>
              <div>{reviewCount}</div>
            </div>
          </div>
          <Button onClick={handleClickWriteReview}>{t('storeDetail.writeReview')}</Button>
        </div>
      </div>
    </>
  );
}
