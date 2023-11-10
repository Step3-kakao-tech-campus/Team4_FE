import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/modal';
import Icon from '../atoms/icon';

export default function NavigationBar() {
  const { t } = useTranslation();
  const { openModal: openSearchModal } = useModal('Search');
  const { openModal: openLanguageModal } = useModal('Language');

  return (
    <nav className="fixed inset-x-0 bottom-0 mx-auto flex w-full max-w-[500px]
      flex-row items-center justify-evenly bg-white"
    >
      <button
        type="button"
        className="flex grow justify-center py-4"
      >
        <Icon name="Clipboard" size="1.7rem" ariaLabel={t('navigationBar.prompt')} />
      </button>
      <Link
        to="/mypage"
        className="flex grow justify-center py-4"
      >
        <Icon name="Person" size="1.7rem" ariaLabel={t('navigationBar.myPage')} />
      </Link>
      <Link
        to="/"
        className="flex grow justify-center py-4"
      >
        <Icon name="Home" size="1.7rem" ariaLabel={t('navigationBar.home')} />
      </Link>
      <button
        type="button"
        className="flex grow justify-center py-4"
        onClick={openSearchModal}
      >
        <Icon name="Search" size="1.7rem" ariaLabel={t('navigationBar.search')} />
      </button>
      <button
        type="button"
        className="flex grow justify-center py-4"
        onClick={openLanguageModal}
      >
        <Icon name="Language" size="1.7rem" ariaLabel={t('navigationBar.language')} />
      </button>
    </nav>
  );
}
