import { comma } from '../../utils/convert';

interface CoinListCardType {
  date: Date,
  passingCoin: number,
  finalCoin: number,
  isUse: boolean,
}

function CoinListCard({
  date, passingCoin, finalCoin, isUse,
}: CoinListCardType) {
  return (
    <div>
      <hr className="border-[0.1rem]" />
      <div className="flex w-full justify-between py-6">
        <div className="pl-6">{date.toString()}</div>
        <div className="pr-9">
          {isUse ? <span>-</span> : <span>+</span>}
          <span>{comma(passingCoin)}</span>
        </div>
        <div className="pr-6">{comma(finalCoin)}</div>
      </div>
    </div>
  );
}

export default CoinListCard;
