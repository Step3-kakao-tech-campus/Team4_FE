import Button from '../atoms/button';
import Input from '../atoms/input';
import PageTitleCard from '../molecules/pageTitleCard';
import SelectRating from '../molecules/selectRating';
import UploadImage from '../organisms/uploadImage';

export default function WriteReviewTemplate() {
  return (
    <main className="pb-[3.7rem]">
      <PageTitleCard pageTitle="리뷰 작성" />
      <UploadImage />
      <div className="flex flex-col gap-4 p-4">
        <SelectRating />
        <div className="h-80">
          <Input mode="multiLine" />
        </div>
        <div className="flex flex-col items-center">
          <div>몇 분이서 오셨나요?</div>
          <div className="flex w-24 items-center gap-2">
            <Input mode="singleLine" />
            명
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>얼마나 지불하셨나요?</div>
          <div className="flex w-36 items-center gap-2">
            <Input mode="singleLine" />
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
}
