import React from 'react';
import ReviewImageCarousel from '../organisms/reviewImageCarousel';
import ReviewInformation from '../molecules/reviewInformation';

function ReviewDetailTemplate() {
  return (
    <main>
      <ReviewImageCarousel />
      <ReviewInformation />
      <section>
        리뷰내용입니다.
      </section>
    </main>
  );
}

export default ReviewDetailTemplate;
