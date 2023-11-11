import { useTranslation } from 'react-i18next';
import PageTitleCard from '../molecules/pageTitleCard';
import { CoinRechargeInfo } from '../../types/coin';
import CoinListCard from '../molecules/coinListCard';
import Page from '../molecules/page';

interface CoinRechargeTemplateProps {
  coinRecharge: CoinRechargeInfo[];
  page: number,
  onChangePage: (type: 'left' | 'right') => void,
  isLastPage: boolean;
}

function CoinRechargeTemplate({
  coinRecharge, page, onChangePage, isLastPage,
}: CoinRechargeTemplateProps) {
  const { t } = useTranslation();

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
          {coinRecharge && coinRecharge.length > 0 ? coinRecharge.map(({
            amount, earnedAt, balance,
          }) => (
            <li key={earnedAt}>
              <CoinListCard
                date={earnedAt}
                amount={amount}
                balance={balance}
              />
            </li>
          )) : <div>코인 충전 내역이 없습니다.</div>}
        </ul>
      </main>
    </div>
  );
}

export default CoinRechargeTemplate;
