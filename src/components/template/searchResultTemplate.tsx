import { useTranslation } from 'react-i18next';
import { StoreCardInfo } from '../../types/store';
import PageTitleCard from '../molecules/pageTitleCard';
import StoreCard from '../molecules/storeCard';

interface SearchResultTemplateProps {
  searchString: string;
  stores: StoreCardInfo[];
}

export default function SearchResultTemplate({
  searchString,
  stores,
}: SearchResultTemplateProps) {
  const { t } = useTranslation();

  return (
    <main className="relative">
      <div className="sticky top-0">
        <PageTitleCard pageTitle={`${searchString} ${t('searchResult.result')}`} />
      </div>
      {stores.length > 0 ? (
        <ul className="flex flex-col gap-2 pb-[3.7rem] pt-2">
          {stores.map(({
            storeId, storeName, category, numsOfReview, ratingAvg, storeImage,
          }) => (
            <li key={storeId}>
              <StoreCard
                storeId={storeId}
                storeName={storeName}
                category={category}
                numsOfReview={numsOfReview}
                ratingAvg={ratingAvg}
                storeImage={storeImage}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-6 text-center font-bold">
          {t('searchResult.noResult')}
        </div>
      )}
    </main>
  );
}
