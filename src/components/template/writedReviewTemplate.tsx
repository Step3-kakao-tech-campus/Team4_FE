import { useTranslation } from 'react-i18next';
import PageTitleCard from '../molecules/pageTitleCard';
import { MypageReviewCardInfo } from '../../types/review';
import ReviewCard from '../molecules/reviewCard';
import Page from '../molecules/page';

interface WritedReviewProps {
  wrtiedReview: MypageReviewCardInfo[];
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
          {wrtiedReview.map(({
            id, rating, content, createdAt, updated, numOfLikes,
          }) => (
            <li key={id}>
              <ReviewCard
                storeId={1}
                reviewId={id}
                rating={rating}
                content={content}
                createdAt={createdAt}
                numOfLikes={numOfLikes}
                updated={updated}
                imageUrls=""
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default WritedReviewTemplate;
