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
          landingPage: {
            d1: '다른 나라의 음식점에서도 쉽게 주문하고 싶으신가요?',
            d2: '가 도와드릴게요',
            languageSelect: '언어 선택',
            language: '한국어',
            start: '시작하기',
            save: '저장',
          },
        },
      },
      en: {
        navigationBar: {
          prompt: 'Move to prompt page',
          myPage: 'Move to my page',
          home: 'Move to main page',
          search: 'Move to search page',
          darkMode: 'Switch to dark mode',
          lightMode: 'Switch to light mode',
        },
        translation: {
          landingPage: {
            d1: 'Do you want to order easily from restaurants in other countries?',
            d2: ' will help you',
            languageSelect: 'language select',
            language: 'English',
            start: 'Start',
            save: 'Save',
          },
        },
      },
    },
  });

export default i18n;
