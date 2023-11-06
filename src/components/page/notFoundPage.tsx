import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <main className="px-8 py-16 text-center">
      <h1 className="mb-16 mt-8 text-2xl font-bold">{t('notFoundPage.notFound')}</h1>
      <div>
        <Link
          className="rounded-full bg-matgpt-blue px-8 py-2 text-white"
          to="/"
        >
          {t('notFoundPage.mainPage')}
        </Link>
      </div>
    </main>
  );
}
