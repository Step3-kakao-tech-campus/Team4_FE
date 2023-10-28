import React from 'react';
import Icon from '../atoms/icon';
import Image from '../atoms/image';
import { comma } from '../../utils/convert';

interface ReviewInformationProps {
  rating: number,
  createdAt: string,
  reviewerName: string,
  reviewerImage: string,
  peopleCount: number,
  totalPrice: number,
}

function ReviewInformation({
  rating, createdAt, reviewerName, reviewerImage, peopleCount, totalPrice,
}: ReviewInformationProps) {
  return (
    <div className="my-4 flex items-center justify-between pl-2 pr-3">
      <div className="flex flex-col">
        <div className="flex items-center pl-1">
          <Icon name="OutlineHeart" ariaLabel="리뷰 좋아요 버튼" size="2rem" />
          <span className="pl-[0.5rem] text-2xl">{rating}</span>
        </div>
        <div className="mt-3 flex items-center">
          <div className="h-12 w-12">
            <Image imageSrc={reviewerImage} alt="유저 이미지" />
          </div>
          <span className="pl-[0.5rem]">{reviewerName}</span>
        </div>
      </div>
      <div>
        <span>{createdAt}</span>
        <div className="my-2 flex items-center justify-end">
          <Icon name="UserGroup" ariaLabel="다녀간 사람 수 아이콘" size="1rem" />
          <span className="pl-2">{peopleCount}</span>
        </div>
        <span>{comma(totalPrice)}</span>
      </div>
    </div>
  );
}

export default ReviewInformation;
