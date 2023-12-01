import { useTranslation } from 'react-i18next';
import PageTitleCard from '../molecules/pageTitleCard';
import ReviewCard from '../molecules/reviewCard';
import Page from '../molecules/page';
import { MypageReviewCardInfo } from '../../types/review';

interface WritedReviewProps {
  likedReview: MypageReviewCardInfo[];
  page: number;
  onChangePage: (type: 'left' | 'right') => void;
  isLastPage: boolean;
}

function LikedReviewTemplate({
  likedReview, page, onChangePage, isLastPage,
}: WritedReviewProps) {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="sticky top-0">
        <PageTitleCard pageTitle={t('likedReviewPage.pageTitle')} />
      </div>
      <nav>
        <Page page={page} isLastPage={isLastPage} onChangePage={onChangePage} />
      </nav>
      <main>
        <ul className="flex flex-col gap-2 pb-[3.7rem] pt-2">
          {likedReview && likedReview[0] !== null ? likedReview.map((review) => (
            review ? (
              <li key={review.reviewId}>
                <ReviewCard
                  storeId={review.storeId}
                  reviewId={review.reviewId}
                  rating={review.rating}
                  content={review.content}
                  createdAt={review.createdAt}
                  numOfLikes={review.numOfLikes}
                  updated={review.updated}
                  imageUrl={review.imageUrl}
                />
              </li>
            ) : null
          )) : <div>{t('userPage.noLikedReview')}</div>}
        </ul>
      </main>
    </div>
  );
}

export default LikedReviewTemplate;
