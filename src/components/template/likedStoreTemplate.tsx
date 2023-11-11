import { useTranslation } from 'react-i18next';
import { StoreCardInfo } from '../../types/store';
import PageTitleCard from '../molecules/pageTitleCard';
import Page from '../molecules/page';
import StoreCard from '../molecules/storeCard';

interface LikedStoreTemplateProps {
  likedStore: StoreCardInfo[],
  page: number,
  onChangePage: (type: 'left' | 'right') => void,
  isLastPage: boolean;
}

function LikedStoreTemplate({
  likedStore, page, onChangePage, isLastPage,
}: LikedStoreTemplateProps) {
  const { t } = useTranslation();

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
          {likedStore && likedStore[0] !== null ? likedStore.map((store) => (
            store ? (
              <li key={store.storeId}>
                <StoreCard
                  storeId={store.storeId}
                  storeName={store.storeName}
                  category={store.category}
                  storeImage={store.storeImage}
                  numsOfReview={store.numsOfReview}
                  ratingAvg={store.ratingAvg}
                  likedCard
                />
              </li>
            ) : null
          )) : <div>{t('userPage.noLikedStore')}</div>}
        </ul>
      </main>
    </div>
  );
}

export default LikedStoreTemplate;
