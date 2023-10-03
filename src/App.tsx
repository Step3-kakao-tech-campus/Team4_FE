import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage';
import SocialLoginModal from './components/socialLoginModal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/test" element={<SocialLoginModal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
