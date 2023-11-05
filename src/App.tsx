import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import ReactModal from 'react-modal';
import { Suspense } from 'react';
import LandingPage from './components/page/landingPage';
import UserPage from './components/page/userPage';
import MainPage from './components/page/mainPage';
import SearchResultPage from './components/page/searchResultPage';
import MainLayout from './components/layouts/mainLayout';
import { queryClient } from './utils/query';
import { worker } from './mocks/worker';
import StoreDetailPage from './components/page/storeDetailPage';
import LikedStorePage from './components/page/likedStorePage';
import CoinRechargePage from './components/page/coinRechargePage';
import { store } from './store';
import ModalContainer from './components/modals/modalContainer';
import WritedReviewPage from './components/page/writedReviewPage';
import RecentlyViewdStorePage from './components/page/recentlyViewdStorePage';
import UserEditProfilePage from './components/page/userEditProfilePage';
import CoinUsagePage from './components/page/coinUsagePage';
import LikedReviewPage from './components/page/likedReviewPage';
import ReviewDetailPage from './components/page/reviewDetailPage';
import WriteReviewPage from './components/page/writeReviewPage';
import ErrorBoundary from './components/layouts/errorBoundary';
import NotFoundPage from './components/page/notFoundPage';
import GlobalLoader from './components/atoms/globalLoader';
import PromptPage from './components/page/promptPage';
import LoginRedriect from './components/page/loginRedriect';
import RegisterUserInfoPage from './components/page/registerUserInfoPage';
import Login from './components/layouts/login';

if (process.env.NODE_ENV === 'development') {
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}

ReactModal.setAppElement('#root');

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <ModalContainer>
            <ErrorBoundary>
              <Suspense fallback={<GlobalLoader />}>
                <Routes>
                  {/* 공통 레이아웃 */}
                  <Route element={<MainLayout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/mypage" element={<UserPage />} />
                    <Route path="/search" element={<SearchResultPage />} />
                    <Route path="/stores/:storeId" element={<StoreDetailPage />} />
                    <Route path="/likedStores" element={<LikedStorePage />} />
                    <Route path="/coinRechargeHistory" element={<CoinRechargePage />} />
                    <Route path="/writtenReview" element={<WritedReviewPage />} />
                    <Route path="/likedReview" element={<LikedReviewPage />} />
                    <Route path="/recentStores" element={<RecentlyViewdStorePage />} />
                    <Route path="/coinUsageHistory" element={<CoinUsagePage />} />
                    <Route path="/stores/:storeId/writeReview" element={<WriteReviewPage />} />
                    <Route path="/profileEditing" element={<UserEditProfilePage />} />
                    <Route path="/prompt/:promptId" element={<PromptPage />} />
                    <Route path="stores/:storeId/reviews/:reviewId" element={<ReviewDetailPage />} />
                    <Route path="/registerUserInfo" element={<RegisterUserInfoPage />} />
                  </Route>
                  {/* 단독 레이아웃 */}
                  <Route path="/landing" element={<LandingPage />} />
                  <Route path="/login-redirect" element={<LoginRedriect />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </ModalContainer>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
