import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icon from '../atoms/icon';
import Image from '../atoms/image';
import { comma } from '../../utils/convert';
import { likeReview, cancelLikeReview } from '../../apis/review';
import DeleteReviewModal from '../modals/deleteReviewModal';

interface ReviewInformationProps {
  rating: number,
  createdAt: string,
  reviewerName: string,
  reviewerImage: string,
  peopleCount: number,
  totalPrice: number,
  isOwn: boolean,
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

function ReviewInformation({
  rating, createdAt, reviewerName, reviewerImage, peopleCount, totalPrice, isOwn, setIsEdit,
}: ReviewInformationProps) {
  const { t } = useTranslation();
  const { storeId, reviewId } = useParams();
  const [isLikeReview, setIsLikeReview] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const { mutate: likeStoreMutation } = useMutation({
    mutationKey: 'likeStore',
    mutationFn: () => {
      if (storeId === undefined || reviewId === undefined) { return likeReview(0, 0); }
      return likeReview(+storeId, +reviewId);
    },
    onSuccess: () => { setIsLikeReview(true); alert(t('reviewDetailPage.successReviewLike')); },
    onError: () => { setIsLikeReview(false); alert(t('reviewDetailPage.failReviewLike')); },
  });

  const { mutate: cancelLikeMutation } = useMutation({
    mutationKey: 'canceLikeStore',
    mutationFn: () => {
      if (storeId === undefined || reviewId === undefined) { return cancelLikeReview(0, 0); }
      return cancelLikeReview(+storeId, +reviewId);
    },
    onSuccess: () => { setIsLikeReview(false); alert(t('reviewDetailPage.successReviewLikeCanel')); },
    onError: () => { setIsLikeReview(true); alert(t('reviewDetailPage.failReviewLikeCanel')); },
  });

  return (
    <div className="my-4 flex items-center justify-between pl-2 pr-3">
      <div className="flex flex-col">
        <div className="flex items-center pl-1">
          {isLikeReview
            ? (
              <button type="button" onClick={() => { cancelLikeMutation(); }}>
                <Icon name="FillHeart" color="text-matgpt-red" ariaLabel={t('reviewDetailPage.canelLikeReviewButton')} size="2rem" />
              </button>
            )
            : (
              <button type="button" onClick={() => { likeStoreMutation(); }}>
                <Icon name="OutlineHeart" ariaLabel={t('reviewDetailPage.likeReviewButton')} size="2rem" />
              </button>
            )}
          <span className="pl-[0.5rem] text-2xl">{rating}</span>
        </div>
        <div className="mt-3 flex items-center">
          <div className="h-12 w-12">
            <Image imageSrc={reviewerImage} alt={t('reviewDetailPage.reviewerProfileImage')} />
          </div>
          <span className="pl-[0.5rem]">{reviewerName}</span>
          {isOwn ? (
            <div>
              <button type="button" onClick={() => { setIsEdit((prev) => !prev); }}>
                <span className="mx-2 text-sm text-matgpt-gray">
                  {t('reviewDetailPage.edit')}
                </span>
              </button>
              <button type="button" onClick={() => { setIsOpenDeleteModal(true); }}>
                <span className="text-sm text-matgpt-gray">
                  {t('reviewDetailPage.delete')}
                </span>
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div>
        <span>{createdAt}</span>
        <div className="my-3 flex items-center justify-end">
          <Icon name="UserGroup" ariaLabel={t('reviewDetailPage.peopleCount')} size="1rem" />
          <span className="pl-2">{peopleCount}</span>
        </div>
        <span>{comma(totalPrice)}</span>
      </div>
      {isOpenDeleteModal ? (
        <DeleteReviewModal
          modalOpen={isOpenDeleteModal}
          setModalOpen={setIsOpenDeleteModal}
        />
      ) : null}
    </div>
  );
}

export default ReviewInformation;
