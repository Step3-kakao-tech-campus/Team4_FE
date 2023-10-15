import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Icon from '../atoms/icon';

interface PageTitleCardProps {
  pageTitle: string;
}

export default function PageTitleCard({ pageTitle }: PageTitleCardProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex w-full items-center gap-4 bg-matgpt-blue p-4 text-white">
      <button
        type="button"
        onClick={() => navigate(-1)}
      >
        <Icon name="OutlineLeft" size="1.2rem" ariaLabel={t('pageTitle.back')} />
      </button>
      <h1 className="flex grow items-center text-lg font-bold">
        {pageTitle}
      </h1>
    </div>
  );
}
