import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons/faGaugeHigh';
import { isNil } from 'ramda';

export type SpeedSectionProps = {
  speed: number | null;
};

export const SpeedSection = ({ speed }: SpeedSectionProps) => {
  const speedKmH = isNil(speed) ? '--' : (speed * 3.6).toLocaleString();

  return (
    <section className="flex flex-col items-center py-6 text-accent">
      <h2 className="flex items-center gap-2 ">
        <FontAwesomeIcon size="lg" icon={faGaugeHigh} />
        <span className="text-m">SPEED</span>
      </h2>
      <div className="flex items-baseline gap-2 font-semibold">
        <span className="text-xxxl">{speedKmH}</span>
        <span className="text-l">{!isNil(speed) && 'km/h'}</span>
      </div>
    </section>
  );
};
