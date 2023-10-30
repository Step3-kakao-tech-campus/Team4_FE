import { useTranslation } from 'react-i18next';

interface StoreOverviewTabProps {
  storeInfo: string;
  lowRatingReview: string;
  highRatingReview: string;
}

export default function StoreOverviewTab({
  storeInfo,
  lowRatingReview,
  highRatingReview,
}: StoreOverviewTabProps) {
  const { t } = useTranslation();
  return (
    <pre className="flex flex-col gap-4 whitespace-pre-line break-words p-4 font-noto">
      <section>
        <h3 className="my-2 text-lg font-bold">{t('storeDetail.information')}</h3>
        <p>{storeInfo}</p>
      </section>
      <section className="flex flex-col gap-2 rounded-2xl border border-matgpt-gray p-4">
        <h3 className="text-lg font-bold">{t('storeDetail.gpt')}</h3>
        <section>
          <h4 className="my-2 font-bold">{t('storeDetail.highRatingReview')}</h4>
          <p>
            &ldquo;
            {highRatingReview}
            &rdquo;
          </p>
        </section>
        <section>
          <h4 className="my-2 font-bold">{t('storeDetail.lowRatingReview')}</h4>
          <p>
            &ldquo;
            {lowRatingReview}
            &rdquo;
          </p>
        </section>
      </section>
    </pre>
  );
}
