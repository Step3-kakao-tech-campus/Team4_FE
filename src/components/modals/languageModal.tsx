import { useTranslation } from 'react-i18next';
import RadioOption from '../molecules/radioOption';
import { LANGUAGE_SET } from '../../utils/language';

export default function LanguageModal() {
  const { t, i18n } = useTranslation();

  const onLanguageSelect = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const selectedLanguage = Object.fromEntries(formData.entries()).LANGUAGE;

    if (selectedLanguage !== undefined
      && i18n.language !== selectedLanguage.toString()) {
      i18n.changeLanguage(selectedLanguage.toString());
    }

    window.location.hash = '';
  };

  return (
    <>
      <div className="w-full max-w-[500px] rounded-2xl bg-white">
        <form onSubmit={onLanguageSelect}>
          <section>
            <h1 className="py-2 text-center">{t('landingPage.languageSelect')}</h1>
            <ul className="w-[80dvw] max-w-[476px] overflow-y-auto overscroll-contain p-4">
              {LANGUAGE_SET.map(({ name, value }) => (
                <li key={value}>
                  <RadioOption
                    labelName={name}
                    optionGroup="LANGUAGE"
                    id={value}
                    value={value}
                    defaultChecked={value === i18n.language}
                  />
                </li>
              ))}
            </ul>
          </section>
          <button
            type="submit"
            className="w-full rounded-b-2xl border-t border-t-matgpt-gray bg-white py-4"
          >
            {t('landingPage.save')}
          </button>
        </form>
      </div>
    </>
  );
}
