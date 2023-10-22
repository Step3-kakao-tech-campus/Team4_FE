import { useTranslation } from 'react-i18next';
import { BsPerson } from 'react-icons/bs';
import { GoHome, GoSearch } from 'react-icons/go';
import { PiMoon, PiClipboard } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/modal';

export default function NavigationBar() {
  const { t } = useTranslation();
  const { openModal } = useModal('Search');

  return (
    <nav className="fixed inset-x-0 bottom-0 mx-auto flex w-full max-w-[500px]
      flex-row items-center justify-evenly bg-white"
    >
      <Link
        to="/prompt"
        className="flex grow justify-center py-4"
      >
        <PiClipboard size="1.7rem" aria-label={t('navigationBar.prompt')} />
      </Link>
      <Link
        to="/mypage"
        className="flex grow justify-center py-4"
      >
        <BsPerson size="1.7rem" aria-label={t('navigationBar.myPage')} />
      </Link>
      <Link
        to="/"
        className="flex grow justify-center py-4"
      >
        <GoHome size="1.7rem" aria-label={t('navigationBar.home')} />
      </Link>
      <button
        type="button"
        className="flex grow justify-center py-4"
        onClick={openModal}
      >
        <GoSearch size="1.7rem" aria-label={t('navigationBar.search')} />
      </button>
      <button
        type="button"
        className="flex grow justify-center py-4"
      >
        <PiMoon size="1.7rem" aria-label={t('navigationBar.darkMode')} />
      </button>
    </nav>
  );
}
