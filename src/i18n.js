import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
  })
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      ko: {
        translation: {
          navigationBar: {
            prompt: '프롬프트 페이지로 이동',
            myPage: '마이 페이지로 이동',
            home: '메인 페이지로 이동',
            search: '검색 페이지로 이동',
            darkMode: '다크 모드로 전환',
            lightMode: '라이트 모드로 전환',
          },
          input: {
            search: '검색하기',
          },
          landingPage: {
            d1: '다른 나라의 음식점에서도 쉽게 주문하고 싶으신가요?',
            d2: '가 도와드릴게요',
            languageSelect: '언어 선택',
            language: '한국어',
            start: '시작하기',
            save: '저장',
          },
          userPage: {
            pageTitle: '마이 페이지',
            userImage: '유저 대표 이미지',
            userName: '유저 닉네임',
            configProfile: '프로필 수정',
            likedRestaurant: '좋아요 한 맛집',
            recentlyViewedRestaurant: '최근 본 맛집',
            writtenReview: '작성 한 리뷰',
            likedReview: '좋아요 한 리뷰',
            coinRechargeHistory: '코인 충전 내역',
            coinUsageHistory: '코인 사용 내역',
            language: '언어',
            logout: '로그 아웃',
          },
          loginModal: {
            closeIcon: '로그인 모달창을 닫습니다.',
            requestLogin: '로그인이 필요합니다.',
            googleLogo: '구글 소셜 로그인 로고',
            kakaoLogo: '카카오 소셜 로그인 로고',
            loginGoogle: 'Google 계정으로 로그인',
            loginKakao: '카카오 로그인',
          },
          menuTag: {
            modify: '수정',
            add: '추가',
            cancel: '취소',
            prompt: '프롬프트에 추가 하시겠습니까?',
          },
          storeCard: {
            moveDetail: '상세 페이지로 이동',
            rating: '별점',
            review: '리뷰',
          },
        },
      },
      en: {
        translation: {
          navigationBar: {
            prompt: 'Move to prompt page',
            myPage: 'Move to my page',
            home: 'Move to main page',
            search: 'Move to search page',
            darkMode: 'Switch to dark mode',
            lightMode: 'Switch to light mode',
          },
          input: {
            search: 'Search',
          },
          landingPage: {
            d1: 'Do you want to order easily from restaurants in other countries?',
            d2: ' will help you',
            languageSelect: 'language select',
            language: 'English',
            start: 'Start',
            save: 'Save',
          },
          userPage: {
            pageTitle: 'My Page',
            userImage: 'User Image',
            userName: 'User Name',
            configProfile: 'Edit Profile',
            likedRestaurant: 'Liked Restaurant',
            recentlyViewedRestaurant: 'Recently Viewed Restaurant',
            writtenReview: 'Written Review',
            likedReview: 'Liked Review',
            coinRechargeHistory: 'Coin Recharge History',
            coinUsageHistory: 'Coin Usage History',
            language: 'Language',
            logout: 'Log Out',
          },
          loginModal: {
            closeIcon: 'Close the Login Modal',
            requestLogin: 'Login is required.',
            googleLogo: 'Google Logo',
            kakaoLogo: 'Kakao Logo',
            loginGoogle: 'Sign in with Google',
            loginKakao: 'Login with Kakao',
          },
          menuTag: {
            modify: 'Modify',
            add: 'Add',
            cancel: 'Cancel',
            prompt: 'Would you like to add it to the prompt?',
          },
          storeCard: {
            moveDetail: 'Move to the detail page',
            rating: 'Rating',
            review: 'Review',
          },
        },
      },
    },
  });

export default i18n;
