import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../atoms/icon';

interface PageInterface {
  page: number,
  isLastPage: boolean,
  onChangePage: (type: 'left' | 'right') => void,
}

function Page({ page, isLastPage, onChangePage }: PageInterface) {
  const { t } = useTranslation();
  function rightPage() {
    if (isLastPage) alert(t('page.lastPage')); else onChangePage('right');
  }
  function leftPage() {
    if (page > 1) onChangePage('left');
    else alert(t('page.firstPage'));
  }
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <button
        onClick={() => { leftPage(); }}
        type="button"
        className="flex items-center"
      >
        <Icon name="OutlineLeft" size="2rem" ariaLabel={t('page.previousPage')} />
        <span>{t('page.previousPage')}</span>
      </button>
      <div className="h-7 w-7 rounded-lg border border-solid border-indigo-500/40 text-center text-lime-800">{page}</div>
      <button onClick={() => { rightPage(); }} type="button" className="flex items-center">
        <span>{t('page.nextPage')}</span>
        <Icon name="OutlineRight" size="2rem" ariaLabel={t('page.nextPage')} />
      </button>
    </div>
  );
}

export default Page;
