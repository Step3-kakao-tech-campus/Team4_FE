import { useTranslation } from 'react-i18next';
import PageTitleCard from '../molecules/pageTitleCard';
import { CoinUsageInfo } from '../../types/coin';
import CoinListCard from '../molecules/coinListCard';
import Page from '../molecules/page';

interface CoinUsageTemplateProps {
  coinUsage: CoinUsageInfo[];
  page: number,
  onChangePage: (type: 'left' | 'right') => void,
  isLastPage: boolean;
}

function CoinUsageTemlate({
  coinUsage, page, onChangePage, isLastPage,
}: CoinUsageTemplateProps) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="sticky top-0">
        <PageTitleCard pageTitle={t('coinUsage.pageTitle')} />
      </div>
      <nav>
        <Page page={page} isLastPage={isLastPage} onChangePage={onChangePage} />
      </nav>
      <main className="relative">
        <div className="flex w-full justify-between py-6">
          <div className="pl-6">{t('coinUsage.date')}</div>
          <div>{t('coinUsage.reChargeCoin')}</div>
          <div className="pr-6">{t('coinUsage.totalCoin')}</div>
        </div>
        <ul className="flex flex-col gap-2 pb-[3.7rem] pt-2">
          {coinUsage && coinUsage.length > 0 ? coinUsage.map(({
            amount, usedAt, balance,
          }) => (
            <li key={usedAt}>
              <CoinListCard
                date={usedAt}
                amount={amount}
                balance={balance}
              />
            </li>
          )) : <div>코인 사용 내역이 없습니다.</div>}
        </ul>
      </main>
    </div>
  );
}

export default CoinUsageTemlate;
