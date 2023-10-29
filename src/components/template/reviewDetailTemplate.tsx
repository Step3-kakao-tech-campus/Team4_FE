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
  const [prompts, setPrompts] = useState({}); // 프롬프트 데이터를 저장할 상태 값
  const [isClick, setIsClick] = useState(false); // 프롬프트 창을 열었는지 확인하는 상태 값
  return (
    <main>
      <PageTitleCard pageTitle="리뷰 상세 페이지" />
      <ReviewImageCarousel
        reviewImages={data.reviewImages}
        prompts={prompts}
        setPrompts={setPrompts}
      />
      <ReviewInformation
        rating={data.rating}
        createdAt={data.createdAt}
        reviewerName={data.reviewerName}
        reviewerImage={data.reviewerImage}
        peopleCount={data.peopleCount}
        totalPrice={data.totalPrice}
      />
      {isClick ? (
        <PromptEdit
          prompts={prompts}
          setIsClick={setIsClick}
          setPrompts={setPrompts}
        />
      ) : (
        <div className="relative">
          <section className="mb-20 px-2">
            {data.content}
          </section>
          <div className="absolute right-12">
            <div className="solid fixed bottom-16 z-10 mb-10 ml-5 h-5 w-5 rounded-3xl bg-matgpt-red text-center leading-4">
              <span className="text-[0.75rem] font-bold">{Object.keys(prompts).length}</span>
            </div>
            <div>
              <button type="button" onClick={() => { setIsClick((prev) => !prev); }} className="solid fixed bottom-8 mb-11 rounded-3xl border-8 border-matgpt-blue bg-matgpt-blue">
                <Icon name="JournalBookmarkFill" ariaLabel="주문 프롬프트 수정 페이지 열기" size="1.5rem" />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default ReviewDetailTemplate;
