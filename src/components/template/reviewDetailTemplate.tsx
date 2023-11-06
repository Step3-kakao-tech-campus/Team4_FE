import React, { useState, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import ReviewImageCarousel from '../organisms/reviewImageCarousel';
import ReviewInformation from '../molecules/reviewInformation';
import PageTitleCard from '../molecules/pageTitleCard';
import { ReviewDetailInfo } from '../../types/review';
import Icon from '../atoms/icon';
import PromptEdit from '../organisms/promptEdit';
import Input from '../atoms/input';
import { RefHandler } from '../../types/refHandler';
import Button from '../atoms/button';

interface ReviewDetailTemplateProps {
  data: ReviewDetailInfo,
  onClickeditReview: () => void,
}

const ReviewDetailTemplate = forwardRef<RefHandler, ReviewDetailTemplateProps>((
  {
    data,
    onClickeditReview,
  },
  ref,
) => {
  const { t } = useTranslation();
  const [prompts, setPrompts] = useState({}); // 프롬프트 데이터를 저장할 상태 값
  const [isClick, setIsClick] = useState(false); // 프롬프트 창을 열었는지 확인하는 상태 값
  const [isEdit, setIsEdit] = useState(false); // 리뷰 수정 상태 안지 확인하는 상태 값

  return (
    <main>
      <PageTitleCard pageTitle={t('reviewDetailPage.pageTitle')} />
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
        isOwn={data.isOwn}
        setIsEdit={setIsEdit}
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
            {isEdit ? (
              <div>
                {' '}
                <div className="h-80">
                  <Input
                    mode="multiLine"
                    ref={ref}
                  />
                  <div className="my-4 flex justify-between pb-24">
                    <Button size="medium" extraStyle="ml-12" onClick={onClickeditReview}>
                      수정
                    </Button>
                    <Button size="medium" extraStyle="mr-12" onClick={() => { setIsEdit(false); }}>
                      취소
                    </Button>
                  </div>
                </div>
              </div>
            )
              : (
                <div>
                  {data.content}
                  <div className="absolute right-12">
                    <div className="solid fixed bottom-16 z-10 mb-10 ml-5 h-5 w-5 rounded-3xl bg-matgpt-red text-center leading-4">
                      <span className="text-[0.75rem] font-bold">{Object.keys(prompts).length}</span>
                    </div>
                    <div>
                      <button type="button" onClick={() => { setIsClick((prev) => !prev); }} className="solid fixed bottom-8 mb-11 rounded-3xl border-8 border-matgpt-blue bg-matgpt-blue">
                        <Icon name="JournalBookmarkFill" ariaLabel={t('reviewDetailPage.openPrompEditPage')} size="1.5rem" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
          </section>
        </div>
      )}
    </main>
  );
});

export default ReviewDetailTemplate;
