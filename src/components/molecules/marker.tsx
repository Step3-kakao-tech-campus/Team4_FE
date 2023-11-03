import { OverlayViewF } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Image from '../atoms/image';
import { MarkerInfo } from '../../types/map';

export default function Marker({
  latitude,
  longitude,
  storeId,
  storeName,
  storeImage,
}: MarkerInfo) {
  const { t } = useTranslation();

  return (
    <OverlayViewF
      mapPaneName="floatPane"
      position={{ lat: latitude, lng: longitude }}
    >
      <Link
        className="absolute -left-6 -top-6 flex flex-col items-center justify-center gap-2"
        to={`/stores/${storeId}`}
        aria-label={`${storeName} ${t('marker.storeDetail')}`}
      >
        <h3 className="absolute -top-7 w-28 truncate break-all rounded-full border border-black bg-white px-2 py-1 text-center text-[0.8125rem] font-bold">{storeName}</h3>
        <div className="h-12 w-12 rounded-full border-2 border-black bg-matgpt-blue object-cover text-white">
          <Image
            imageSrc={storeImage}
            alt={`${storeName} ${t('marker.storeImage')}`}
            objectFitMode
            className="rounded-full object-cover"
          />
        </div>
      </Link>
    </OverlayViewF>
  );
}
