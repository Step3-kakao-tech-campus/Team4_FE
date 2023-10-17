import React from 'react';
import { useTranslation } from 'react-i18next';
import PageTitleCard from '../molecules/pageTitleCard';
import { CoinRechargeInfo } from '../../types/coin';
import CoinListCard from '../molecules/coinListCard';
import Icon from '../atoms/icon';

interface CoinRechargeTemplateType {
  coinRecharge: CoinRechargeInfo[];
  page: number,
  onChangePage: (type: 'left' | 'right') => void,
}

function CoinRechargeTemplate({ coinRecharge, page, onChangePage }: CoinRechargeTemplateType) {
  const { t } = useTranslation();

  function rightPage() {
    if (coinRecharge.length < 12) alert(t('coinRecharging.lastPage')); else onChangePage('right');
  }
  function leftPage() {
    if (page > 1) onChangePage('left');
    else alert(t('coinRecharging.firstPage'));
  }
  return (
    <div>
      <div className="sticky top-0">
        <PageTitleCard pageTitle={t('coinRecharging.pageTitle')} />
      </div>
      <nav className="flex items-center justify-between px-4 py-2">
        <button
          onClick={() => { leftPage(); }}
          type="button"
          className="flex items-center"
        >
          <Icon name="OutlineLeft" size="2rem" ariaLabel={t('coinRecharging.previousPage')} />
          <span>{t('coinRecharging.previousPage')}</span>
        </button>
        <div className="h-7 w-7 rounded-lg border border-solid border-indigo-500/40 text-center text-lime-800">{page}</div>
        <button onClick={() => { rightPage(); }} type="button" className="flex items-center">
          <span>{t('coinRecharging.nextPage')}</span>
          <Icon name="OutlineRight" size="2rem" ariaLabel={t('coinRecharging.nextPage')} />
        </button>
      </nav>
      <main className="relative">
        <div className="flex w-full justify-between py-6">
          <div className="pl-6">{t('coinRecharging.date')}</div>
          <div>{t('coinRecharging.reChargeCoin')}</div>
          <div className="pr-6">{t('coinRecharging.totalCoin')}</div>
        </div>
        <ul className="flex flex-col gap-2 pb-[3.7rem] pt-2">
          {coinRecharge.map(({
            rechargeId, date, reChargeCoin, totalCoin,
          }) => (
            <li key={rechargeId}>
              <CoinListCard
                date={date}
                passingCoin={reChargeCoin}
                finalCoin={totalCoin}
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default CoinRechargeTemplate;
