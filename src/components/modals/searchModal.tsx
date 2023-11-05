import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../atoms/input';
import Icon from '../atoms/icon';
import { RefHandler } from '../../types/refHandler';

export default function SearchModal() {
  const { t } = useTranslation();
  const searchRef = useRef<RefHandler>(null);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
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
    <div className="h-[100dvh] w-[100dvw] max-w-[500px] bg-white">
      <div className="h-16 bg-matgpt-blue p-3">
        <div className="flex flex-row items-center gap-2">
          <button
            type="button"
            className="text-white"
            onClick={() => {
              navigate(-1);
            }}
          >
            <Icon name="OutlineLeft" size="1.4em" ariaLabel={t('searchBar.cancelSearch')} />
          </button>
          <Input
            mode="search"
            ref={searchRef}
            onSearchClick={handleSearch}
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 bg-white py-4">
        <div>
          <h2 className="mb-2 px-4 font-bold">{t('searchBar.popularStore')}</h2>

        </div>
        <div>
          <h2 className="mb-2 px-4 font-bold">{t('searchBar.recentReviewed')}</h2>

        </div>
        <div>
          <h2 className="mb-2 px-4 font-bold">{t('searchBar.similar')}</h2>

        </div>
      </div>
    </div>
  );
}
