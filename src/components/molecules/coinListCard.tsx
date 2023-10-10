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
        <div>{usingCash}</div>
        <div className="pr-6">{sumCash}</div>
      </div>
    </div>
  );
}

export default CoinListCard;
