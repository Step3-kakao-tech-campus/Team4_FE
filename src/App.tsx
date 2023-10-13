import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import LandingPage from './components/page/landingPage';
import UserPage from './components/page/userPage';
import MainPage from './components/page/mainPage';
import NavigationBar from './components/layouts/navigationBar';
import SearchResultPage from './components/page/searchResultPage';
import { queryClient } from './utils/query';
import { worker } from './mocks/worker';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route element={<NavigationBar />}>
            <Route path="/mypage" element={<UserPage />} />
            <Route path="/search" element={<SearchResultPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
