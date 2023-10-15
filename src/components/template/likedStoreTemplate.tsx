import { StoreCardInfo } from '../../types/store';
import PageTitleCard from '../molecules/pageTitleCard';
import Icon from '../atoms/icon';
import StoreCard from '../molecules/storeCard';

interface LikedStoreTemplateType {
  likedStore: StoreCardInfo[],
  page: number,
  onChangePage: (type: 'left' | 'right') => void,
}

function LikedStoreTemplate({ likedStore, page, onChangePage }: LikedStoreTemplateType) {
  console.log(likedStore);
  return (
    <div className="relative">
      <div className="sticky top-0">
        <PageTitleCard pageTitle="좋아요 한 맛집" />
      </div>
      <nav className="flex items-center justify-between px-4 py-2">
        <button onClick={() => onChangePage('left')} type="button" className="flex items-center">
          <Icon name="OutlineLeft" size="2rem" ariaLabel="왼쪽 페이지로 이동" />
          <span>이전 페이지로</span>
        </button>
        <div className="h-7 w-7 rounded-lg border border-solid border-indigo-500/40 text-center text-lime-800">{page}</div>
        <button onClick={() => onChangePage('right')} type="button" className="flex items-center">
          <span>다음 페이지로</span>
          <Icon name="OutlineRight" size="2rem" ariaLabel="오른쪽 페이지로 이동" />
        </button>
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
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default LikedStoreTemplate;
