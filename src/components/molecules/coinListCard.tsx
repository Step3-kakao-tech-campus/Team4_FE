import { comma } from '../../utils/convert';

interface ConListCardType {
  date: string,
  usingCash: number,
  sumCash: number,
}

function CoinListCard({ date, usingCash, sumCash }:ConListCardType) {
  return (
    <div>
      <hr className="border-[0.1rem]" />
      <div className="w-full flex justify-between py-6">
        <div className="pl-6">{date}</div>
        <div>{comma(usingCash)}</div>
        <div className="pr-6">{comma(sumCash)}</div>
      </div>
    </div>
  );
}

export default CoinListCard;
