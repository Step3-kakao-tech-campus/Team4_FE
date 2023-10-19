import { useState } from 'react';
import { useQuery } from 'react-query';
import { getWrtiedReview } from '../../apis/writedReview';
import WritedReviewTemplate from '../template/writedReviewTemplate';

function WritedReviewPage() {
  const [page, setPage] = useState(1);
  const limits = 8;
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [`getWrtiedReview?cursor=${1 + 8 * (page - 1)}&limits=${limits}`],
    queryFn: () => getWrtiedReview(1 + 8 * (page - 1), limits),
  });
  const onHandleChangePage = (type: 'right' | 'left') => {
    if (type === 'right') {
      setPage((prev) => prev + 1);
    } else if (type === 'left') {
      setPage((prev) => prev - 1);
    }
  };
  if (data && !isLoading && !isFetching) {
    return (
      <WritedReviewTemplate
        wrtiedReview={data}
        page={page}
        onChangePage={onHandleChangePage}
      />
    );
  }
  return (
    <div>Loading..</div>
  );
}

export default WritedReviewPage;
