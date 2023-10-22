import { useTranslation } from 'react-i18next';
import Icon from '../atoms/icon';
import MyGoogleMap from '../organisms/MyGoogleMap';
import { useModal } from '../../hooks/modal';

export default function MainPage() {
  const { t } = useTranslation();
  const { openModal } = useModal('Search');

  return (
    <main>
      <div className="h-16 bg-matgpt-blue p-3">
        <div className="flex h-full flex-row items-center gap-2">
          <button
            type="button"
            className="flex h-full w-full items-center justify-end rounded-full bg-white px-4 py-2"
            onClick={openModal}
          >
            <Icon name="Search" size="1.2rem" ariaLabel={t('input.search')} />
          </button>
        </div>
      </div>
      <div className="h-[calc(100dvh-7.7rem)]">
        <MyGoogleMap stores={[
          {
            storeId: 1,
            storeName: '박대감닭한마리',
            lat: 37.56471,
            lng: 126.9838683,
            image: '/image/fakeDb/store/store1.png',
          },
          {
            storeId: 2,
            storeName: '고반식당 판교아브뉴프랑점',
            lat: 37.564452,
            lng: 126.984287,
            image: '/image/fakeDb/store/store2.png',
          },
          {
            storeId: 3,
            storeName: '서울지짐이',
            lat: 37.5650588,
            lng: 126.9840605,
            image: '/image/fakeDb/store/store3.png',
          },
        ]}
        />
      </div>
    </main>
  );
}
