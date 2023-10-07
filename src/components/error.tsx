import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

export type ErrorProps = {
  error: string;
  className?: string;
};

export const Error = ({ error, className }: ErrorProps) => {
  return (
    <div className={clsx('p-2 flex items-center gap-1 text-xs bg-error justify-center text-accent', className)}>
      <FontAwesomeIcon icon={faTriangleExclamation} size="sm" />
      {error}
    </div>
  );
};
