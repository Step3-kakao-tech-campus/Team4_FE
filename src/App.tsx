import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/page/landingPage';
import UserPage from './components/page/userPage';
import ReviewCard from './components/molecules/reviewCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/mypage" element={<UserPage />} />
          <Route
            path="/test"
            element={(
              <ReviewCard
                storeImage="/image/fakeDb/reviewCard/storeImage.png"
                storeName="몽준헌 판교점"
                profileImage="/image/fakeDb/userPage/userImage.png"
                reviewerName="작성자"
                reviewRating={4.5}
                memberNumber={2}
                createdAt="7개월 전"
              />
            )}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
