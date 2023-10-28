import React from 'react';
import ReviewImageCarousel from '../organisms/reviewImageCarousel';
import ReviewInformation from '../molecules/reviewInformation';
import { ReviewDetailInfo } from '../../types/review';

interface ReviewDetailTemplateProps {
  data: ReviewDetailInfo,
}

function ReviewDetailTemplate({ data }: ReviewDetailTemplateProps) {
  console.log(data);
  return (
    <main>
      <ReviewImageCarousel reviewImages={data.reviewImages} />
      <ReviewInformation />
      <section>
        {data.content}
      </section>
    </main>
  );
}

export default ReviewDetailTemplate;
