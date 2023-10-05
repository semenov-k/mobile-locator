import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons/faGaugeHigh';

export type SpeedSectionProps = {
  speed: number | null;
};

export const SpeedSection = ({ speed }: SpeedSectionProps) => {
  return (
    <section className="flex flex-col items-center py-6 text-accent">
      <h2 className="flex items-center gap-2 ">
        <FontAwesomeIcon size="lg" icon={faGaugeHigh} />
        <span className="text-m">SPEED</span>
      </h2>
      <div className="flex items-baseline gap-2 font-semibold">
        <span className="text-xxxl">{speed?.toLocaleString() ?? '--'}</span>
        <span className="text-l">{speed && 'km/h'}</span>
      </div>
    </section>
  );
};
