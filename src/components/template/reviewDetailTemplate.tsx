import React, { useState } from 'react';
import ReviewImageCarousel from '../organisms/reviewImageCarousel';
import ReviewInformation from '../molecules/reviewInformation';
import PageTitleCard from '../molecules/pageTitleCard';
import { ReviewDetailInfo } from '../../types/review';
import Icon from '../atoms/icon';
import PromptEdit from '../organisms/promptEdit';

interface ReviewDetailTemplateProps {
  data: ReviewDetailInfo,
}

function ReviewDetailTemplate({ data }: ReviewDetailTemplateProps) {
  console.log(data);
  const [prompts, setPrompts] = useState({}); // 프롬프트 데이터를 저장할 상태 값
  const [isClick, setIsClick] = useState(false); // 프롬프트 창을 열었는지 확인하는 상태 값
  return (
    <main>
      <PageTitleCard pageTitle="리뷰 상세 페이지" />
      <ReviewImageCarousel reviewImages={data.reviewImages} setPrompts={setPrompts} />
      <ReviewInformation
        rating={data.rating}
        createdAt={data.createdAt}
        reviewerName={data.reviewerName}
        reviewerImage={data.reviewerImage}
        peopleCount={data.peopleCount}
        totalPrice={data.totalPrice}
      />
      {isClick ? <PromptEdit prompts={prompts} /> : (
        <section className="mb-20 px-2">
          {data.content}
        </section>
      )}

      <button type="button" onClick={() => { setIsClick((prev) => !prev); }}>
        <Icon name="FillBook" ariaLabel="주문 프롬프트 수정 페이지 열기" size="1rem" />
      </button>
    </main>
  );
}

export default ReviewDetailTemplate;
