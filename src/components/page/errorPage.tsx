import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface ErrorPageProps {
  errorMessage?: string;
  resetError?: () => void;
}

export default function ErrorPage({
  errorMessage,
  resetError,
}: ErrorPageProps) {
  const { t } = useTranslation();
  return (
    <main className="px-8 py-16 text-center">
      <h1 className="my-8 text-2xl font-bold">{t('errorPage.fail')}</h1>
      {errorMessage ? <p className="mb-16">{errorMessage}</p> : null}
      <div>
        <Link
          className="rounded-full bg-matgpt-blue px-8 py-2 text-white"
          to="/"
          onClick={resetError}
        >
          {t('errorPage.mainPage')}
        </Link>
      </div>
    </main>
  );
}
