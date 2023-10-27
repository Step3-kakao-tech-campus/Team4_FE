import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../atoms/button';
import { useModal } from '../../hooks/modal';
import Icon from '../atoms/icon';

export default function LandingPage() {
  const { t } = useTranslation();

  const { openModal } = useModal('Language');

  return (
    <main className="flex h-[100dvh] flex-col items-center justify-center gap-32 p-16 text-center">
      <div className="flex flex-col gap-20">
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
      </div>
      <div className="flex flex-col gap-20">
        <Button
          onClick={openModal}
          aria-haspopup="dialog"
        >
          <div className="flex items-center gap-1">
            <Icon name="Language" ariaLabel={t('landingPage.languageSelect')} size="1.2rem" />
            {t('landingPage.language')}
          </div>
        </Button>
        <Link to="/">
          <Button>{t('landingPage.start')}</Button>
        </Link>
      </div>
    </main>
  );
}
