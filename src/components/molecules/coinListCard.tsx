import { comma } from '../../utils/convert';

interface CoinListCardType {
  date: string,
  passingCoin: number,
  finalCoin: number,
}

function CoinListCard({ date, passingCoin, finalCoin }: CoinListCardType) {
  return (
    <div>
      <hr className="border-[0.1rem]" />
      <div className="flex w-full justify-between py-6">
        <div className="pl-6">{date}</div>
        <div>{comma(passingCoin)}</div>
        <div className="pr-6">{comma(finalCoin)}</div>
      </div>
    </div>
  );
}

export default CoinListCard;
