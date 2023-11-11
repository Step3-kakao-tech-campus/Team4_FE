import { useTranslation } from 'react-i18next';
import PageTitleCard from '../molecules/pageTitleCard';
import ReviewCard from '../molecules/reviewCard';
import Page from '../molecules/page';

interface WritedReviewProps {
  wrtiedReview: any[];
  page: number;
  onChangePage: (type: 'left' | 'right') => void;
  isLastPage: boolean;
}
function WritedReviewTemplate({
  wrtiedReview, page, onChangePage, isLastPage,
}: WritedReviewProps) {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="sticky top-0">
        <PageTitleCard pageTitle={t('writtenReviewPage.pageTitle')} />
      </div>
      <nav>
        <Page page={page} isLastPage={isLastPage} onChangePage={onChangePage} />
      </nav>
      <main>
        <ul className="flex flex-col gap-2 pb-[3.7rem] pt-2">
          {wrtiedReview && wrtiedReview[0] !== null ? wrtiedReview.map((review) => (
            review ? (
              <li key={review.id}>
                <ReviewCard
                  storeId={1}
                  reviewId={review.id}
                  rating={review.rating}
                  content={review.content}
                  createdAt={review.createdAt}
                  numOfLikes={review.numOfLikes}
                  updated={review.updated}
                  imageUrl={review.imageUrl}
                />
              </li>
            ) : null
          )) : <div>{t('userPage.noWritedReview')}</div>}
        </ul>
      </main>
    </div>
  );
}

export default WritedReviewTemplate;
