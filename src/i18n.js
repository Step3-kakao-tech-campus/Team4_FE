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
          reviewCard: {
            linkToReview: '의 선택된 리뷰 페이지로 이동',
            storeImage: '식당 이미지',
            userImage: '유저 이미지',
            ratingIcon: '리뷰 평점',
            memberNumIcon: '방문 인원',
          },
          storeCard: {
            moveDetail: '상세 페이지로 이동',
            rating: '별점',
            review: '리뷰',
          },
          pageTitle: {
            back: '이전 페이지로 이동',
          },
          searchBar: {
            cancelSearch: '검색 취소',
            popularStore: '인기 음식점',
            recentReviewed: '최근 리뷰가 달린 음식점',
            similar: '나와 비슷한 사용자에게 인기 있는 음식점',
          },
          marker: {
            storeImage: '가게 이미지',
            storeDetail: '가게 상세 페이지로 이동',
          },
          deleteReviewModal: {
            deleteTitle: '정말로 삭제하시겠습니까?',
            notRecovredTitle: '삭제된 리뷰는 복구할 수 없습니다.',
            cancel: '취소',
          },
          likedStorePage: {
            lastPage: '마지막 페이지 입니다.',
            firstPage: '첫 번째 페이지 입니다.',
            pageTitle: '좋아요 한 맛집',
            leftPageIcon: '왼쪽 페이지로 이동',
            rightPagIcon: '오른쪽 페이지로 이동',
            previousPage: '이전 페이지로',
            nextPage: '다음 페이지로',
            heartButton: '맛집 좋아요 버튼',
          },
          coinRecharging: {
            lastPage: '마지막 페이지 입니다.',
            firstPage: '첫 번째 페이지 입니다.',
            pageTitle: '코인 충전 내역',
            leftPageIcon: '왼쪽 페이지로 이동',
            rightPagIcon: '오른쪽 페이지로 이동',
            previousPage: '이전 페이지로',
            nextPage: '다음 페이지로',
            date: '충전 날짜',
            reChargeCoin: '충전 코인',
            totalCoin: '코인 합계',
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
          reviewCard: {
            linkToReview: 'Selected Review Page',
            storeImage: 'Store Image',
            userImage: 'User Image',
            ratingIcon: 'Review Rating',
            memberNumIcon: 'The number of people visiting the store',
          },
          storeCard: {
            moveDetail: 'Move to the detail page',
            rating: 'Rating',
            review: 'Review',
          },
          pageTitle: {
            back: 'Go to previous page',
          },
          searchBar: {
            cancelSearch: 'Cancel search',
            popularStore: 'Popular restaurant',
            recentReviewed: 'Recently reviewed restaurant',
            similar: 'Popular restaurant for users similar to me',
          },
          marker: {
            storeImage: 'Store image',
            storeDetail: 'Go to the store details page',
          },
          deleteReviewModal: {
            deleteTitle: 'Are you sure you want to delete it?',
            notRecovredTitle: 'Deleted reviews cannot be recovered.',
            cancel: 'Cancel',
          },
          likedStorePage: {
            lastPage: 'This is the last page.',
            firstPage: 'This is the first page.',
            pageTitle: 'A Restaurant with Likes',
            leftPageIcon: 'Go to the left page',
            rightPagIcon: 'Go to the right page',
            previousPage: 'Go to the previous page',
            nextPage: 'Go to the next page',
            heartButton: 'Like Restaurant Button',
          },
          coinRecharging: {
            lastPage: 'This is the last page.',
            firstPage: 'This is the first page.',
            pageTitle: 'Coin Recharge History',
            previousPage: 'Go to the previous page',
            nextPage: 'Go to the next page',
            date: 'Recharge Date',
            reChargeCoin: 'Recharge Coins',
            totalCoin: 'Coin Total',
          },
        },
      },
    },
  });

export default i18n;
