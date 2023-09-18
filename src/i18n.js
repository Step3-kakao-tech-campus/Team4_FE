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
          language: '한국어',
          landing: {
            d1: '다른 나라의 음식점에서도 쉽게 주문하고 싶으신가요?',
            d2: 'MatGPT가 도와드릴게요',
          },
          button: {
            language: '언어',
            ok: '확인',
          },
        },
      },
      en: {
        translation: {
          language: 'English',
          landing: {
            d1: 'Do you want to order easily from restaurants in other countries?',
            d2: 'MatGPT will help you',
          },
          button: {
            language: 'Language',
            ok: 'ok',
          },
        },
      },
    },
  });

export default i18n;
