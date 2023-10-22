import React, { useState } from 'react';
import { useQuery } from 'react-query';
import CoinUsageTemlate from '../template/coinUsageTemlate';
import { getUsageCoin } from '../../apis/coin';

function CoinUsagePage() {
  const [page, setPage] = useState(1);
  const limits = 12;
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [`getUsageCoin?cursor=${1 + 12 * (page - 1)}&limits=${limits}`],
    queryFn: () => getUsageCoin(1 + 12 * (page - 1), limits),
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
      <CoinUsageTemlate coinUsage={data} page={page} onChangePage={onHandleChangePage} />
    );
  }

  return (
    <div>Loading...</div>
  );
}

export default CoinUsagePage;
