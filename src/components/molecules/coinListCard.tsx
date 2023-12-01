import useElapsedDate from '../../hooks/convert';
import { comma } from '../../utils/convert';

interface CoinListCardType {
  date: string;
  amount: number;
  balance: number;
}

function CoinListCard({
  date, amount, balance,
}: CoinListCardType) {
  const elapsedDate = useElapsedDate({ dateString: date });

  return (
    <div>
      <hr className="border-[0.1rem]" />
      <div className="flex w-full justify-between py-6">
        <div className="pl-6">{elapsedDate}</div>
        <div className="pr-9">
          <span>{comma(amount)}</span>
        </div>
        <div className="pr-6">{comma(balance)}</div>
      </div>
    </div>
  );
}

export default CoinListCard;
