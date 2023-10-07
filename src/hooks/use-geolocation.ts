import { useEffect, useMemo, useState } from 'react';
import { pick, equals } from 'ramda';
import { throttle } from 'throttle-debounce';

type Position = {
  latitude: number | null;
  longitude: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
  speed: number | null;
};

const UPDATES_THROTTLE_TIMEOUT = 500;

export const useGeolocation = () => {
  const [error, setError] = useState<string | null>(null);
  const [position, setPosition] = useState<Position>({
    latitude: null,
    longitude: null,
    altitude: null,
    altitudeAccuracy: null,
    speed: null,
  });
  const [updatedAt, setUpdatedAt] = useState<number>();

  const isSupporting = !!navigator.geolocation;

  const positionCallback: PositionCallback = useMemo(
    () =>
      throttle(UPDATES_THROTTLE_TIMEOUT, ({ timestamp, coords }: GeolocationPosition) => {
        const newPosition = pick(['altitude', 'latitude', 'longitude', 'speed', 'altitudeAccuracy'], coords);
        if (!equals(newPosition, position)) {
          setPosition(newPosition);
        }
        setUpdatedAt(timestamp);
        setError(null);
      }),
    [position],
  );

  useEffect(() => {
    if (isSupporting) {
      const watchId = navigator.geolocation.watchPosition(
        positionCallback,
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
    } else {
      setError('Geolocation is not supporting');
    }
  }, [isSupporting, positionCallback]);

  return useMemo(
    () => ({
      position,
      error,
      updatedAt,
    }),
    [error, position, updatedAt],
  );
};
