import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useParams } from 'react-router-dom';
import Icon from '../atoms/icon';
import Image from '../atoms/image';
import { comma } from '../../utils/convert';
import { likeReview, cancelLikeReview } from '../../apis/review';

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
  const { storeId, reviewId } = useParams();
  const [isLikeReview, setIsLikeReview] = useState(false);

  const { mutate: likeStoreMutation } = useMutation({
    mutationKey: 'likeStore',
    mutationFn: () => {
      if (storeId === undefined || reviewId === undefined) { return likeReview(0, 0); }
      return likeReview(+storeId, +reviewId);
    },
    onSuccess: () => { setIsLikeReview(true); alert('맛집 좋아요 성공'); },
    onError: () => { setIsLikeReview(false); alert('맛집 좋아요 실패'); },
  });

  const { mutate: cancelLikeMutation } = useMutation({
    mutationKey: 'canceLikeStore',
    mutationFn: () => {
      if (storeId === undefined || reviewId === undefined) { return cancelLikeReview(0, 0); }
      return cancelLikeReview(+storeId, +reviewId);
    },
    onSuccess: () => { setIsLikeReview(false); alert('맛집 좋아요 취소 성공'); },
    onError: () => { setIsLikeReview(true); alert('맛집 좋아요 취소 실패'); },
  });

  return (
    <div className="my-4 flex items-center justify-between pl-2 pr-3">
      <div className="flex flex-col">
        <div className="flex items-center pl-1">
          {isLikeReview
            ? (
              <button type="button" onClick={() => { cancelLikeMutation(); }}>
                <Icon name="FillHeart" color="text-matgpt-red" ariaLabel="리뷰 좋아요 버튼" size="2rem" />
              </button>
            )
            : (
              <button type="button" onClick={() => { likeStoreMutation(); }}>
                <Icon name="OutlineHeart" ariaLabel="리뷰 좋아요 버튼" size="2rem" />
              </button>
            )}
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
        <div className="my-3 flex items-center justify-end">
          <Icon name="UserGroup" ariaLabel="다녀간 사람 수 아이콘" size="1rem" />
          <span className="pl-2">{peopleCount}</span>
        </div>
        <span>{comma(totalPrice)}</span>
      </div>
    </div>
  );
}

export default ReviewInformation;
