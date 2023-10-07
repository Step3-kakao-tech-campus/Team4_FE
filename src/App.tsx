import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './components/page/landingPage';
import UserPage from './components/page/userPage';
import SocialLoginModal from './components/socialLoginModal';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/mypage" element={<UserPage />} />
          <Route path="/test" element={<SocialLoginModal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;