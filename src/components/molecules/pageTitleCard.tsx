import Icon from '../atoms/icon';

interface PageTitleCardProps {
  pageTitle: string;
}

export default function PageTitleCard({ pageTitle }: PageTitleCardProps) {
  return (
    <div className="flex w-full items-center gap-4 bg-matgpt-blue p-4 text-white">
      <button type="button">
        <Icon name="OutlineLeft" size="1.2rem" ariaLabel="뒤로 가기" />
      </button>
      <h1 className="flex grow items-center text-lg font-bold">
        {pageTitle}
      </h1>
    </div>
  );
}
