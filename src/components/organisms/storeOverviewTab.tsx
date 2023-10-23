interface StoreOverviewTabProps {
  storeInfo: string;
}

export default function StoreOverviewTab({ storeInfo }: StoreOverviewTabProps) {
  return (
    <div>{storeInfo}</div>
  );
}
