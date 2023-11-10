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
          {likedReview.map(({
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

export default LikedReviewTemplate;
