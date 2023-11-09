import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { StoreCardInfo } from '../../types/store';
import PageTitleCard from '../molecules/pageTitleCard';
import Page from '../molecules/page';
import StoreCard from '../molecules/storeCard';

interface LikedStoreTemplateProps {
  likedStore: StoreCardInfo[],
  page: number,
  onChangePage: (type: 'left' | 'right') => void,
}

function LikedStoreTemplate({ likedStore, page, onChangePage }: LikedStoreTemplateProps) {
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
            storeId, storeName, category, storeImage, numsOfReview, ratingAvg,
          }) => (
            <li key={storeId}>
              <StoreCard
                storeId={storeId}
                storeName={storeName}
                category={category}
                storeImage={storeImage}
                numsOfReview={numsOfReview}
                ratingAvg={ratingAvg}
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
