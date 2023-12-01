interface PageTitleCardProps {
  pageTitle: string;
}

export default function PageTitleCard({ pageTitle }: PageTitleCardProps) {
  return (
    <div className="flex w-full items-center gap-4 bg-matgpt-blue p-4 text-white">
      <h1 className="flex grow items-center justify-center text-lg font-bold">
        {pageTitle}
      </h1>
    </div>
  );
}
