import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/page/landingPage';
import UserPage from './components/page/userPage';
import MainPage from './components/page/mainPage';
import MainLayout from './components/layouts/mainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 공통 레이아웃 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/mypage" element={<UserPage />} />
        </Route>
        {/* 단독 레이아웃 */}
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
