import { useTranslation } from 'react-i18next';
import { GPTReviewContent } from '../../types/review';

interface StoreOverviewTabProps {
  phoneNumber: string;
  address: string;
  businessHours: string;
  gptReview: GPTReviewContent
}

export default function StoreOverviewTab({
  phoneNumber,
  address,
  businessHours,
  gptReview,
}: StoreOverviewTabProps) {
  const { t } = useTranslation();
  return (
    <pre className="flex flex-col gap-4 whitespace-pre-line break-words p-4 font-noto">
      <section>
        <h3 className="my-2 text-lg font-bold">{t('storeDetail.information')}</h3>
        <p>
          전화번호:
          {' '}
          {phoneNumber}
        </p>
        <p>
          주소:
          {' '}
          {address}
        </p>
        <p>
          영업시간:
          {' '}
          {businessHours}
        </p>
      </section>
      <section className="flex flex-col gap-2 rounded-2xl border border-matgpt-gray p-4">
        <h3 className="text-lg font-bold">{t('storeDetail.gpt')}</h3>
        {gptReview && gptReview.isExist
          ? (
            <>
              <section>
                <h4 className="my-2 font-bold">{t('storeDetail.highRatingReview')}</h4>
                <p>
                  &ldquo;
                  {gptReview.content.best}
                  &rdquo;
                </p>
              </section>
              <section>
                <h4 className="my-2 font-bold">{t('storeDetail.lowRatingReview')}</h4>
                <p>
                  &ldquo;
                  {gptReview.content.worst}
                  &rdquo;
                </p>
              </section>
            </>
          )
          : (
            <p className="rounded-lg bg-matgpt-gray/25 p-4 text-center text-black/75">
              {t('storeDetail.gptNotExist')}
            </p>
          )}
      </section>
    </pre>
  );
}
