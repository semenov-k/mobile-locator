import { AltitudeSection, SpeedSection, Error, LastUpdate, PositionSection } from './components';
import { useGeolocation } from './hooks/use-geolocation';

function App() {
  const { position, error, updatedAt } = useGeolocation();

  return (
    <main className="flex flex-col min-h-screen bg-primary">
      <SpeedSection speed={position.speed} />
      <AltitudeSection altitude={position.altitude} accuracy={position.altitudeAccuracy} />
      <PositionSection latitude={position.latitude} longitude={position.longitude} />
      {updatedAt && <LastUpdate className="fixed bottom-0 w-full" updatedAt={updatedAt} />}
      {error && <Error error={error} className="fixed bottom-0 w-full z-10" />}
    </main>
  );
}

export default App;
