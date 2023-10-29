import React from 'react';
import ReviewImageCarousel from '../organisms/reviewImageCarousel';
import ReviewInformation from '../molecules/reviewInformation';
import PageTitleCard from '../molecules/pageTitleCard';
import { ReviewDetailInfo } from '../../types/review';

interface ReviewDetailTemplateProps {
  data: ReviewDetailInfo,
}

function ReviewDetailTemplate({ data }: ReviewDetailTemplateProps) {
  console.log(data);

  return (
    <main>
      <PageTitleCard pageTitle="리뷰 상세 페이지" />
      <ReviewImageCarousel reviewImages={data.reviewImages} />
      <ReviewInformation
        rating={data.rating}
        createdAt={data.createdAt}
        reviewerName={data.reviewerName}
        reviewerImage={data.reviewerImage}
        peopleCount={data.peopleCount}
        totalPrice={data.totalPrice}
      />
      <section className="mb-20 px-2">
        {data.content}
      </section>
    </main>
  );
}

export default ReviewDetailTemplate;
