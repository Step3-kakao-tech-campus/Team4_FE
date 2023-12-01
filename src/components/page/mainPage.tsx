import { useTranslation } from 'react-i18next';
import Icon from '../atoms/icon';
import MyGoogleMap from '../organisms/MyGoogleMap';
import { useModal } from '../../hooks/modal';

export default function MainPage() {
  const { t } = useTranslation();
  const { openModal } = useModal('Search');

  return (
    <main>
      <div className="h-16 bg-matgpt-blue p-3">
        <div className="flex h-full flex-row items-center gap-2">
          <button
            type="button"
            className="flex h-full w-full items-center justify-end rounded-full bg-white px-4 py-2"
            onClick={openModal}
          >
            <Icon name="Search" size="1.2rem" ariaLabel={t('input.search')} />
          </button>
        </div>
      </div>
      <div className="relative h-[calc(100dvh-7.7rem)]">
        <MyGoogleMap />
      </div>
    </main>
  );
}
