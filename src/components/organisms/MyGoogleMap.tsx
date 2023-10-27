import { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { MarkerInfo } from '../../types/map';
import Marker from '../molecules/marker';
import { useGeolocation } from '../../hooks/geolocation';

const containerStyle = {
  width: '100%',
  height: '100%',
};

interface MyGoogleMapProps {
  stores: MarkerInfo[];
}

export default function MyGoogleMap({ stores }: MyGoogleMapProps) {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const { location } = useGeolocation();

  const onLoad = useCallback((loadedMap: google.maps.Map) => {
    setMap(loadedMap);
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
  });

  return (
    isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={18}
        onLoad={onLoad}
        onDragEnd={() => {
          console.log(map?.getBounds());
        }}
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
