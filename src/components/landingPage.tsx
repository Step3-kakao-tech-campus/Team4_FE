import { useTranslation } from 'react-i18next';
import { IoLanguage } from 'react-icons/io5';
import { useEffect, useRef } from 'react';
import Button from './atoms/button';
import OptionSelectPopup from './organisms/optionSelectPopup';
import { LANGUAGE_SET, setLanguage } from '../utils/language';

export default function LandingPage() {
  const { t } = useTranslation();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current !== null) {
      dialogRef.current.showModal();
    }
  }, []);

  const showLanguageSelectModal = () => {
    if (dialogRef.current !== null) {
      dialogRef.current.showModal();
    }
  };

  const onLanguageSelect = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const selectedLanguage = Object.fromEntries(formData.entries()).languageSelect.toString();

    setLanguage(selectedLanguage);

    if (dialogRef.current !== null) {
      dialogRef.current.close();
    }
  };

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
      <OptionSelectPopup
        options={LANGUAGE_SET}
        optionGroup="languageSelect"
        onOptionSelect={onLanguageSelect}
        ref={dialogRef}
      />
      <Button
        onClick={showLanguageSelectModal}
      >
        <div className="flex items-center gap-1">
          <IoLanguage aria-label={t('landingPage.languageSelect')} size="1.2rem" />
          {t('landingPage.language')}
        </div>
      </Button>
      <Button>{t('landingPage.start')}</Button>
    </main>
  );
}
