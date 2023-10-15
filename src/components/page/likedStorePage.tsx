import { useState } from 'react';
import { useQuery } from 'react-query';
import LikedStoreTemplate from '../template/likedStoreTemplate';
import { getLikedStore } from '../../apis/likedStore';

function LikedStorePage() {
  const [page, setPage] = useState(1);
  const limits = 6;
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [`getLikedStore?cursor=${1 + 6 * (page - 1)}&limits=${limits}`],
    queryFn: () => getLikedStore(1 + 6 * (page - 1), limits),
  });

  const fonHandleChangePage = (type: 'right' | 'left') => {
    if (type === 'right') {
      setPage(() => page + 1);
    } else if (type === 'left') {
      setPage(() => page - 1);
    }
  };

  if (data && !isLoading && !isFetching) {
    return (
      <LikedStoreTemplate
        likedStore={data}
        page={page}
        onChangePage={fonHandleChangePage}
      />
    );
  }
  return (
    <div>Loading..</div>
  );
}

export default LikedStorePage;
