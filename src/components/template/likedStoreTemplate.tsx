import { useTranslation } from 'react-i18next';
import { StoreCardInfo } from '../../types/store';
import PageTitleCard from '../molecules/pageTitleCard';
import Icon from '../atoms/icon';
import LikedStoreCard from '../molecules/likedStoreCard';

interface LikedStoreTemplateType {
  likedStore: StoreCardInfo[],
  page: number,
  onChangePage: (type: 'left' | 'right') => void,
}

function LikedStoreTemplate({ likedStore, page, onChangePage }: LikedStoreTemplateType) {
  const { t } = useTranslation();
  function rightPage() {
    if (likedStore.length < 6) alert(t('likedStorePage.lastPage')); else onChangePage('right');
  }
  function leftPage() {
    if (page > 1) onChangePage('left');
    else alert(t('likedStorePage.firstPage'));
  }

  return (
    <div className="relative">
      <div className="sticky top-0">
        <PageTitleCard pageTitle={t('likedStorePage.pageTitle')} />
      </div>
      <nav className="flex items-center justify-between px-4 py-2">
        <button
          onClick={() => { leftPage(); }}
          type="button"
          className="flex items-center"
        >
          <Icon name="OutlineLeft" size="2rem" ariaLabel={t('likedStorePage.leftPageIcon')} />
          <span>{t('likedStorePage.previousPage')}</span>
        </button>
        <div className="h-7 w-7 rounded-lg border border-solid border-indigo-500/40 text-center text-lime-800">{page}</div>
        <button onClick={() => { rightPage(); }} type="button" className="flex items-center">
          <span>{t('likedStorePage.nextPage')}</span>
          <Icon name="OutlineRight" size="2rem" ariaLabel={t('likedStorePage.rightPagIcon')} />
        </button>
      </nav>
      <main>
        <ul className="flex flex-col gap-2 pb-[3.7rem] pt-2">
          {likedStore.map(({
            storeId, storeName, category, review, reviewCount, rating, image,
          }) => (
            <li key={storeId}>
              <LikedStoreCard
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
