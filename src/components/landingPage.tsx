import { useTranslation } from 'react-i18next';
import { IoLanguage } from 'react-icons/io5';
import Button from './atoms/button';

export default function LandingPage() {
  const { t } = useTranslation();

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-32 p-16 text-center">
      <div className="text-2xl font-bold">
        {t('landingPage.d1')}
      </div>
      <div className="text-2xl font-bold">
        <span className="text-4xl">
          <span className="text-matgpt-red">MatGP</span>
          T
        </span>
        {t('landingPage.d2')}
      </div>
      <button
        type="button"
        className="flex items-center gap-1"
      >
        <IoLanguage aria-label={t('aria.languageSelect')} />
        {t('landingPage.language')}
      </button>
      <Button>{t('landingPage.start')}</Button>
    </main>
  );
}
