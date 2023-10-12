import { useState } from 'react';
import NavigationBar from '../layouts/navigationBar';
import SearchBar from '../molecules/searchBar';
import MyGoogleMap from '../organisms/MyGoogleMap';

export default function MainPage() {
  const [isSearching, setIsSearching] = useState(false);
  const openSearchPanel = () => {
    setIsSearching(true);
  };

  const closeSearchPanel = () => {
    setIsSearching(false);
  };

  return (
    <main>
      <SearchBar
        isSearching={isSearching}
        openSearchPanel={openSearchPanel}
        closeSearchPanel={closeSearchPanel}
      />
      <div className={`${isSearching ? 'hidden' : ''}`}>
        <div className="h-[calc(100dvh-7.7rem)]">
          <MyGoogleMap stores={[
            {
              storeId: 1,
              storeName: '박대감닭한마리',
              lat: 37.56471,
              lng: 126.9838683,
              image: '/logo192.png',
            },
            {
              storeId: 2,
              storeName: '고반식당 판교아브뉴프랑점',
              lat: 37.564452,
              lng: 126.984287,
              image: '/logo192.png',
            },
            {
              storeId: 3,
              storeName: '서울지짐이',
              lat: 37.5650588,
              lng: 126.9840605,
              image: '/logo192.png',
            },
          ]}
          />
        </div>
        <NavigationBar />
      </div>

    </main>
  );
}
