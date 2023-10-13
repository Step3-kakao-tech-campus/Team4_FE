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
  return (
    <main>
      <PageTitleCard pageTitle={`${searchString} 검색 결과`} />
      <ul className="flex flex-col gap-2 py-2">
        {stores.map(({
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
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
