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
          <MyGoogleMap />
        </div>
        <NavigationBar />
      </div>

    </main>
  );
}
