import { useTranslation } from 'react-i18next';
import { StoreCardInfo } from '../../types/store';
import PageTitleCard from '../molecules/pageTitleCard';
import Page from '../molecules/page';
import StoreCard from '../molecules/storeCard';

interface LikedStoreTemplateProps {
  likedStore: StoreCardInfo[],
  page: number,
  onChangePage: (type: 'left' | 'right') => void,
  hasNextPage: boolean;
}

function LikedStoreTemplate({
  likedStore, page, onChangePage, hasNextPage,
}: LikedStoreTemplateProps) {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="sticky top-0">
        <PageTitleCard pageTitle={t('likedStorePage.pageTitle')} />
      </div>
      <nav>
        <Page page={page} isLastPage={!hasNextPage} onChangePage={onChangePage} />
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
