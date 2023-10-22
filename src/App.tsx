import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import LandingPage from './components/page/landingPage';
import UserPage from './components/page/userPage';
import MainPage from './components/page/mainPage';
import SearchResultPage from './components/page/searchResultPage';
import MainLayout from './components/layouts/mainLayout';
import { queryClient } from './utils/query';
import { worker } from './mocks/worker';
import LikedStorePage from './components/page/likedStorePage';
import CoinRechargePage from './components/page/coinRechargePage';
import WritedReviewPage from './components/page/writedReviewPage';
import RecentlyViewdStorePage from './components/page/recentlyViewdStorePage';
import UserEditProfilePage from './components/page/userEditProfilePage';
import { store } from './store/store';

if (process.env.NODE_ENV === 'development') {
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* 공통 레이아웃 */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<MainPage />} />
              <Route path="/mypage" element={<UserPage />} />
              <Route path="/search" element={<SearchResultPage />} />
              <Route path="/likedStores" element={<LikedStorePage />} />
              <Route path="/coinRechargeHistory" element={<CoinRechargePage />} />
              <Route path="/writtenReview" element={<WritedReviewPage />} />
              <Route path="/recentStores" element={<RecentlyViewdStorePage />} />
              <Route path="/profileEditing" element={<UserEditProfilePage />} />
            </Route>
            {/* 단독 레이아웃 */}
            <Route path="/landing" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
