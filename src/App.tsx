import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/page/landingPage';
import UserPage from './components/page/userPage';
import MainPage from './components/page/mainPage';
import NavigationBar from './components/layouts/navigationBar';
import SearchResultPage from './components/page/searchResultPage';

function App() {
  return (
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
  );
}

export default App;
