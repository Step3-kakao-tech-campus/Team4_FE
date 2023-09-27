import i18n from '../i18n';
import { Option } from '../types/option';

export const LANGUAGE_SET: Option[] = [
  {
    name: '한국어',
    value: 'ko',
  },
  {
    name: 'English',
    value: 'en',
  },
];

export const setLanguage = (language: string) => {
  i18n.changeLanguage(language);
  document.documentElement.lang = language;
};
