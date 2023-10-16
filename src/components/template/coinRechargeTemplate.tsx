import React from 'react';
import PageTitleCard from '../molecules/pageTitleCard';
import { CoinRechargeInfo } from '../../types/coin';
import CoinListCard from '../molecules/coinListCard';

interface CoinRechargeTemplateType {
  coinRecharge: CoinRechargeInfo[];
}

function CoinRechargeTemplate({ coinRecharge }: CoinRechargeTemplateType) {
  return (
    <main className="relative">
      <div className="sticky top-0">
        <PageTitleCard pageTitle="코인 충전 내역" />
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
  );
}

export default CoinRechargeTemplate;
