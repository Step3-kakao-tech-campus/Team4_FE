import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RecentlyViewdStoreTemplate from '../template/recentlyViewedStoreTemplate';
import { getLocalStorageItem } from '../../utils/localStorage';
import divideArray from '../../utils/array';

function RecentlyViewdStorePage() {
  const [page, setPage] = useState(1);
  const data = JSON.parse(getLocalStorageItem('recentlyViewedStore') || '[]');
  const dividedData = divideArray(data, 6);

  const navigate = useNavigate();
  useEffect(() => {
    // 로그인 상태가 아니면 로그인 레이아웃으로 이동
    if (localStorage.getItem('accessToken') === null) {
      navigate('/login', {
        replace: true,
      });
    }
  }, []);

  const onHandleChangePage = (type: 'right' | 'left') => {
    if (type === 'right') {
      setPage(() => page + 1);
    } else if (type === 'left') {
      setPage(() => page - 1);
    }
  };

  return (
    <RecentlyViewdStoreTemplate
      recentlyViewdStore={dividedData[page - 1]}
      page={page}
      onChangePage={onHandleChangePage}
      isLastPage={dividedData.length <= page}
    />
  );
}

export default RecentlyViewdStorePage;
