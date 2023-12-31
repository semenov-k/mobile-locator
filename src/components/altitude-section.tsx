import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isNil } from 'ramda';

export type AltitudeSectionProps = {
  altitude: number | null;
  accuracy: number | null;
};

export const AltitudeSection = ({ altitude, accuracy }: AltitudeSectionProps) => {
  const altitudeM = isNil(altitude) ? '--' : Math.round(altitude).toLocaleString();

  return (
    <section className="flex flex-col items-center py-6 bg-accent text-primary">
      <h2 className="flex items-center gap-2 ">
        <FontAwesomeIcon size="lg" icon={faPlaneDeparture} />
        <span className="text-m">ALTITUDE</span>
      </h2>
      <div className="flex flex-col items-center">
        <div className="flex items-baseline gap-2 font-semibold">
          <span className="text-xxl">{altitudeM}</span>
          <span className="text-l">{!isNil(altitude) && 'm'}</span>
        </div>
        <span className="text-s text-secondary">
          {!isNil(altitude) && !isNil(accuracy) && `Accuracy ±${accuracy.toLocaleString()} m`}
        </span>
      </div>
    </section>
  );
};
