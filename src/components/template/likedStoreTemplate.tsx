import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { StoreCardInfo } from '../../types/store';
import PageTitleCard from '../molecules/pageTitleCard';
import StoreCard from '../molecules/storeCard';
import Page from '../molecules/page';

interface LikedStoreTemplateType {
  likedStore: StoreCardInfo[],
  page: number,
  onChangePage: (type: 'left' | 'right') => void,
}

function LikedStoreTemplate({ likedStore, page, onChangePage }: LikedStoreTemplateType) {
  const { t } = useTranslation();
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    if (likedStore.length < 6) {
      return () => {
        setIsLastPage(true);
      };
    }
    return () => {
      setIsLastPage(false);
    };
  }, [likedStore]);

  return (
    <div className="relative">
      <div className="sticky top-0">
        <PageTitleCard pageTitle={t('likedStorePage.pageTitle')} />
      </div>
      <nav>
        <Page page={page} isLastPage={isLastPage} onChangePage={onChangePage} />
      </nav>
      <main>
        <ul className="flex flex-col gap-2 pb-[3.7rem] pt-2">
          {likedStore.map(({
            storeId, storeName, category, review, reviewCount, rating, image,
          }) => (
            <li key={storeId}>
              <StoreCard
                storeId={storeId}
                storeName={storeName}
                category={category}
                review={review}
                reviewCount={reviewCount}
                rating={rating}
                image={image}
                likedCard
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default LikedStoreTemplate;
