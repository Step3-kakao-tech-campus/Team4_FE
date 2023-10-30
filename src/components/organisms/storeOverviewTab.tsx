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
  return (
    <pre className="flex flex-col gap-4 p-4 font-noto">
      <section>
        <h3 className="my-2 text-lg font-bold">음식점 정보</h3>
        <p>{storeInfo}</p>
      </section>
      <section className="flex flex-col gap-2 rounded-2xl border border-matgpt-gray p-4">
        <h3 className="text-lg font-bold">ChatGPT로 요약한 최근 후기</h3>
        <section>
          <h4 className="my-2 font-bold">높은 평점 요약</h4>
          <p>
            &ldquo;
            {highRatingReview}
            &rdquo;
          </p>
        </section>
        <section>
          <h4 className="my-2 font-bold">낮은 평점 요약</h4>
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
