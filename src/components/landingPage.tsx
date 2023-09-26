import { useTranslation } from 'react-i18next';
import { IoLanguage } from 'react-icons/io5';
import { useRef } from 'react';
import Button from './atoms/button';
import OptionSelectPopup from './organisms/optionSelectPopup';

export default function LandingPage() {
  const { t } = useTranslation();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const showLanguageSelectModal = () => {
    if (dialogRef.current !== null) {
      dialogRef.current.showModal();
    }
  };

  const onLanguageSelect = () => {
    if (dialogRef.current !== null) {
      dialogRef.current.close();
    }
  };

  const closeLanguageSelectModal = () => {
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
        optionNames={['한국어', 'English']}
        optionGroup="언어 선택"
        onOptionSelect={onLanguageSelect}
        closeModal={closeLanguageSelectModal}
        ref={dialogRef}
      />
      <button
        type="button"
        className="flex items-center gap-1"
        onClick={showLanguageSelectModal}
      >
        <IoLanguage aria-label={t('aria.languageSelect')} />
        {t('landingPage.language')}
      </button>
      <Button>{t('landingPage.start')}</Button>
    </main>
  );
}
