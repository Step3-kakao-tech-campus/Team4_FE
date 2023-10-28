import { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { MarkerInfo } from '../../types/map';
import Marker from '../molecules/marker';
import { useGeolocation } from '../../hooks/geolocation';
// import { useStoreBound } from '../../hooks/query';

const containerStyle = {
  width: '100%',
  height: '100%',
};

interface MyGoogleMapProps {
  stores: MarkerInfo[];
}

export default function MyGoogleMap({ stores }: MyGoogleMapProps) {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [bound, setBound] = useState<google.maps.LatLngBounds>();
  const { location } = useGeolocation();

  const onLoad = useCallback((loadedMap: google.maps.Map) => {
    setMap(loadedMap);
    setBound(loadedMap.getBounds());
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
          setBound(map?.getBounds());
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
          minZoom: 14,
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
