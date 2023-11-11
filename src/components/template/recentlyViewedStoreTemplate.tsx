import { useTranslation } from 'react-i18next';
import PageTitleCard from '../molecules/pageTitleCard';
import StoreCard from '../molecules/storeCard';
import Page from '../molecules/page';

interface RecentlyViewdStoreTemplateProps {
  recentlyViewdStore: any[];
  page: number;
  onChangePage: (type: 'left' | 'right') => void;
  isLastPage: boolean;
}

function RecentlyViewdStoreTemplate({
  recentlyViewdStore, page, onChangePage, isLastPage,
}: RecentlyViewdStoreTemplateProps) {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="sticky top-0">
        <PageTitleCard pageTitle={t('recentlyViewdStorePage.pageTitle')} />
      </div>
      <nav>
        <Page page={page} isLastPage={isLastPage} onChangePage={onChangePage} />
      </nav>
      <main>
        <ul className="flex flex-col gap-2 pb-[3.7rem] pt-2">
          {recentlyViewdStore ? recentlyViewdStore.map(({
            storeIamge, storeId, storeName, category,
            ratingAvg, numsOfReview,
          }) => (
            <li key={storeId}>
              <StoreCard
                storeImage={storeIamge}
                storeId={storeId}
                storeName={storeName}
                category={category}
                ratingAvg={ratingAvg}
                numsOfReview={numsOfReview}
              />
            </li>
          )) : <div>최근 본 음식점이 없습니다.</div>}
        </ul>
      </main>
    </div>
  );
}

export default RecentlyViewdStoreTemplate;
