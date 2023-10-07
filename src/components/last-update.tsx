import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export type LastUpdateProps = {
  updatedAt: number;
  className?: string;
};

const msToS = (ms: number) => Math.round((Date.now() - ms) / 1000);

export const LastUpdate = ({ updatedAt, className }: LastUpdateProps) => {
  const [updatedAtSeconds, setUpdatedAtSeconds] = useState(msToS(updatedAt));

  useEffect(() => {
    setUpdatedAtSeconds(msToS(updatedAt));
    const interval = setInterval(() => setUpdatedAtSeconds(msToS(updatedAt)), 10000);

    return () => clearInterval(interval);
  }, [updatedAt]);

  return (
    <div className={clsx('p-2 flex items-center gap-1 text-xs bg-accent justify-center', className)}>
      <FontAwesomeIcon icon={faArrowRotateRight} size="xs" />
      <span className="text-primary">Last update:</span>
      <span className="text-secondary">{updatedAtSeconds < 10 ? 'Just now' : `${updatedAtSeconds} seconds ago`}</span>
    </div>
  );
};
