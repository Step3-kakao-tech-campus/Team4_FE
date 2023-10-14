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
    <main className="relative">
      <div className="sticky top-0">
        <PageTitleCard pageTitle={`${searchString} 검색 결과`} />
      </div>
      <ul className="flex flex-col gap-2 pb-[3.7rem] pt-2">
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
