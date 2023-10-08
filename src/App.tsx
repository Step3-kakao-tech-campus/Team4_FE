import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/page/landingPage';
import UserPage from './components/page/userPage';
import Icon from './components/atoms/icon';

function App() {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/mypage" element={<UserPage />} />
          <Route path="/test" element={<Icon name="Person" size="3.5rem" ariaLabel={t('navigationBar.myPage')} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
