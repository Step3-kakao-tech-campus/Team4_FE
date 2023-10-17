import React from 'react';
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
  function rightPage() {
    if (coinRecharge.length < 12) alert('마지막 페이지 입니다'); else onChangePage('right');
  }
  function leftPage() {
    if (page > 1) onChangePage('left');
    else alert('첫 페이지 입니다');
  }
  return (
    <div>
      <div className="sticky top-0">
        <PageTitleCard pageTitle="코인 충전 내역" />
      </div>
      <nav className="flex items-center justify-between px-4 py-2">
        <button
          onClick={() => { leftPage(); }}
          type="button"
          className="flex items-center"
        >
          <Icon name="OutlineLeft" size="2rem" ariaLabel="이전 페이지로" />
          <span>이전 페이지로</span>
        </button>
        <div className="h-7 w-7 rounded-lg border border-solid border-indigo-500/40 text-center text-lime-800">{page}</div>
        <button onClick={() => { rightPage(); }} type="button" className="flex items-center">
          <span>다음 페이지로</span>
          <Icon name="OutlineRight" size="2rem" ariaLabel="다음 펭지로" />
        </button>
      </nav>
      <main className="relative">
        <div className="flex w-full justify-between py-6">
          <div className="pl-6">충전 날짜</div>
          <div>충전 금액</div>
          <div className="pr-6">코인 합계</div>
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
