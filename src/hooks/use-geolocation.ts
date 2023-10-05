import { useEffect, useMemo, useState } from 'react';
import { pick, equals } from 'ramda';

type Position = {
  latitude: number | null;
  longitude: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
  speed: number | null;
};

export const useGeolocation = () => {
  const [error, setError] = useState<string | null>(null);
  const [position, setPosition] = useState<Position>({
    latitude: null,
    longitude: null,
    altitude: null,
    altitudeAccuracy: null,
    speed: null, // TODO: m/s -> km/h
  });
  const [updatedAt, setUpdatedAt] = useState<number>();

  const isSupporting = !!navigator.geolocation;

  useEffect(() => {
    if (isSupporting) {
      const watchId = navigator.geolocation.watchPosition(
        ({ timestamp, coords }) => {
          const newPosition = pick(['altitude', 'latitude', 'longitude', 'speed', 'altitudeAccuracy'], coords);
          if (!equals(newPosition, position)) {
            setPosition(newPosition);
          }
          setUpdatedAt(timestamp);
          setError(null);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            setError('Access to geolocation denied');
          } else {
            setError('Unable to get geolocation info');
          }
        },
        {
          enableHighAccuracy: true,
        },
      );

      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, [isSupporting, position]);

  return useMemo(
    () => ({
      position,
      error,
      updatedAt,
    }),
    [error, position, updatedAt],
  );
};
