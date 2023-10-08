import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';
import LandingPage from './components/page/landingPage';
import UserPage from './components/page/userPage';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/mypage" element={<UserPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
