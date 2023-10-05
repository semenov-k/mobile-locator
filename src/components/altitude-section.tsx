import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type AltitudeSectionProps = {
  altitude: number | null;
  accuracy: number | null;
};

export const AltitudeSection = ({ altitude, accuracy }: AltitudeSectionProps) => {
  return (
    <section className="flex flex-col items-center py-6 bg-accent text-primary">
      <h2 className="flex items-center gap-2 ">
        <FontAwesomeIcon size="lg" icon={faPlaneDeparture} />
        <span className="text-m">ALTITUDE</span>
      </h2>
      <div className="flex flex-col items-center">
        <div className="flex items-baseline gap-2 font-semibold">
          <span className="text-xxl">{altitude?.toLocaleString() ?? '--'}</span>
          <span className="text-l">{altitude && 'm'}</span>
        </div>
        <span className="text-s text-secondary">
          {altitude && accuracy && `Accuracy ±${accuracy.toLocaleString()} m`}
        </span>
      </div>
    </section>
  );
};
