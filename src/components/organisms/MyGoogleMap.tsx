import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { MarkerInfo } from '../../types/map';
import Marker from '../molecules/marker';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 37.563752,
  lng: 126.984487,
};

interface MyGoogleMapProps {
  stores: MarkerInfo[];
}

export default function MyGoogleMap({ stores }: MyGoogleMapProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
  });

  return (
    isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        options={{
          mapTypeControl: false,
          streetViewControl: false,
          styles: [{
            featureType: 'poi',
            elementType: 'all',
            stylers: [{
              visibility: 'off',
            }],
          }],
        }}
      >
        {stores.map(({
          lat, lng, storeId, storeName, image,
        }) => (
          <Marker
            key={storeId}
            lat={lat}
            lng={lng}
            storeName={storeName}
            image={image}
            storeId={storeId}
          />
        ))}
      </GoogleMap>
    ) : null
  );
}
