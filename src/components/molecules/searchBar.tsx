import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../atoms/icon';
import Input from '../atoms/input';
import StoreCard from './storeCard';
import { RefHandler } from '../../types/refHandler';

interface SearchBarProps {
  isSearching: boolean;
  openSearchPanel: () => void;
  closeSearchPanel: () => void;
}

export default function SearchBar({
  isSearching,
  openSearchPanel,
  closeSearchPanel,
}: SearchBarProps) {
  const { t } = useTranslation();
  const searchRef = useRef<RefHandler>(null);
  const navigate = useNavigate();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchRef.current !== null) {
      const inputValue = searchRef.current.getInputValue();
      if (inputValue === undefined) {
        alert('오류가 발생했습니다. 다시 시도해 주세요.');
      } else if (inputValue.length < 2) {
        alert('두 글자 이상 입력해 주세요.');
      } else {
        navigate(`/search?q=${inputValue}`);
      }
    } else {
      alert('오류가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <div
      className="relative h-16 bg-matgpt-blue p-3"
      onFocus={openSearchPanel}
    >
      <div className="flex flex-row items-center gap-2">
        {isSearching ? (
          <button
            type="button"
            className="text-white"
            onClick={closeSearchPanel}
          >
            <Icon name="OutlineLeft" size="1.4em" ariaLabel={t('searchBar.cancelSearch')} />
          </button>
        ) : (
          <>
          </>
        )}
        <Input
          mode="search"
          ref={searchRef}
          onSearchClick={onSearch}
        />
      </div>
      {isSearching ? (
        <div className="absolute left-0 top-16 z-50 flex w-full flex-col gap-4 bg-white py-4">
          <div>
            <h2 className="mb-2 px-4 font-bold">{t('searchBar.popularStore')}</h2>
            <StoreCard
              storeId={1}
              storeName="몽중헌 판교점"
              category="중식당"
              review="닭껍질이 엄청 맛있습니다"
              image="/image/fakeDb/store/store1.png"
              reviewCount={2000}
              rating={4.3}
            />
          </div>
          <div>
            <h2 className="mb-2 px-4 font-bold">{t('searchBar.recentReviewed')}</h2>
            <StoreCard
              storeId={2}
              storeName="고반식당 판교아브뉴프랑점"
              category="돼지고기 구이"
              review="숙성고기 맛집"
              image="/image/fakeDb/store/store2.png"
              reviewCount={500}
              rating={4.6}
            />
          </div>
          <div>
            <h2 className="mb-2 px-4 font-bold">{t('searchBar.similar')}</h2>
            <StoreCard
              storeId={3}
              storeName="비앙또아 판교점"
              category="양식"
              review="줄 서서 먹는 브런치 카페"
              image="/image/fakeDb/store/store3.png"
              reviewCount={500}
              rating={4.4}
            />
          </div>
        </div>
      ) : (
        <>
        </>
      )}
    </div>
  );
}
