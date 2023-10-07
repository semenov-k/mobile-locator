export type PositionSectionProps = {
  latitude: number | null;
  longitude: number | null;
};

export const PositionSection = ({ latitude, longitude }: PositionSectionProps) => {
  return (
    <section className="flex flex-col gap-2 p-6 text-accent text-s">
      <div className="flex justify-between">
        <span className="font-light">LATITUDE</span>
        <span>{latitude ?? '--'}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-light">LONGITUDE</span>
        <span>{longitude ?? '--'}</span>
      </div>
    </section>
  );
};
