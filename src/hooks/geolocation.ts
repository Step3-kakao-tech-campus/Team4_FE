import { useEffect, useState } from 'react';
import { INITIAL_CENTER } from '../utils/geolocation';

export function useGeolocation() {
  const [location, setLocation] = useState(INITIAL_CENTER);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((loc) => {
        const { latitude, longitude } = loc.coords;

        setLocation({
          lat: latitude,
          lng: longitude,
        });
      });
    }
  }, []);

  return { location };
}
