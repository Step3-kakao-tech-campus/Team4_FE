import {
  Dispatch, SetStateAction, forwardRef, useImperativeHandle, useRef,
} from 'react';
import Button from '../atoms/button';
import Input from '../atoms/input';
import PageTitleCard from '../molecules/pageTitleCard';
import SelectRating from '../molecules/selectRating';
import UploadImage from '../organisms/uploadImage';
import { RefHandler, WriteReviewRefHandler } from '../../types/refHandler';

interface WriteReviewTemplateProps {
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
}

const WriteReviewTemplate = forwardRef<WriteReviewRefHandler, WriteReviewTemplateProps>((
  {
    rating,
    setRating,
  },
  ref,
) => {
  const contentRef = useRef<RefHandler>(null);
  const peopleCountRef = useRef<RefHandler>(null);
  const totalPriceRef = useRef<RefHandler>(null);

  useImperativeHandle(ref, () => ({
    getContent: () => contentRef.current?.getInputValue(),
    getPeopleCount: () => peopleCountRef.current?.getInputValue(),
    getTotalPrice: () => totalPriceRef.current?.getInputValue(),
  }));

  return (
    <main className="pb-[3.7rem]">
      <PageTitleCard pageTitle="리뷰 작성" />
      <UploadImage />
      <div className="flex flex-col gap-4 p-4 text-center">
        <SelectRating
          rating={rating}
          setRating={setRating}
        />
        <div>
          가게에 대한 리뷰를 남겨주세요.
        </div>
        <div className="h-80">
          <Input
            mode="multiLine"
            ref={contentRef}
          />
        </div>
        <div className="flex flex-col items-center">
          <div>몇 분이서 오셨나요?</div>
          <div className="flex w-24 items-center gap-2">
            <Input
              mode="singleLine"
              ref={peopleCountRef}
            />
            명
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>얼마나 지불하셨나요?</div>
          <div className="flex w-36 items-center gap-2">
            <Input
              mode="singleLine"
              ref={totalPriceRef}
            />
            원
          </div>
        </div>
        <div className="flex justify-between">
          <Button backgroundColor="bg-matgpt-gray">작성 취소하기</Button>
          <Button>작성 완료하기</Button>
        </div>
      </div>
    </main>
  );
});

export default WriteReviewTemplate;
