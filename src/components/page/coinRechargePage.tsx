import React, { useState } from 'react';
import { useQuery } from 'react-query';
import CoinRechargeTemplate from '../template/coinRechargeTemplate';
import { getChargeCoin } from '../../apis/coinCharge';

function CoinRechargePage() {
  const [page, setPage] = useState(1);
  const limits = 12;
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [`getChargeCoin?cursor=${1 + 6 * (page - 1)}&limits=${limits}`],
    queryFn: () => getChargeCoin(1 + 6 * (page - 1), limits),
  });

  const onHandleChangePage = (type: 'right' | 'left') => {
    if (type === 'right') {
      setPage(() => page + 1);
    } else if (type === 'left') {
      setPage(() => page - 1);
    }
  };

  if (data && !isLoading && !isFetching) {
    return (
      <CoinRechargeTemplate coinRecharge={data} page={page} onChangePage={onHandleChangePage} />
    );
  }

  return (
    <div>Loading...</div>
  );
}

export default CoinRechargePage;
