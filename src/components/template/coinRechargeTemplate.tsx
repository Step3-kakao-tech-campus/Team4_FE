import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageTitleCard from '../molecules/pageTitleCard';
import { CoinRechargeInfo } from '../../types/coin';
import CoinListCard from '../molecules/coinListCard';
import Page from '../molecules/page';

interface CoinRechargeTemplateType {
  coinRecharge: CoinRechargeInfo[];
  page: number,
  onChangePage: (type: 'left' | 'right') => void,
}

function CoinRechargeTemplate({ coinRecharge, page, onChangePage }: CoinRechargeTemplateType) {
  const { t } = useTranslation();

  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    if (coinRecharge.length < 12) {
      return () => {
        setIsLastPage(true);
      };
    }
    return () => {
      setIsLastPage(false);
    };
  }, [coinRecharge]);

  return (
    <div>
      <div className="sticky top-0">
        <PageTitleCard pageTitle={t('coinRecharging.pageTitle')} />
      </div>
      <nav>
        <Page page={page} isLastPage={isLastPage} onChangePage={onChangePage} />
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
                isUse={false}
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default CoinRechargeTemplate;
