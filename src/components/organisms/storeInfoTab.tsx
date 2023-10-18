interface StoreInfoTabProps {
  storeInfo: string;
}

export default function StoreInfoTab({ storeInfo }: StoreInfoTabProps) {
  return (
    <div>{storeInfo}</div>
  );
}
