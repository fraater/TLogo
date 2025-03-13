import IconButton from '@/components/IconButton';
import { twMerge } from 'tailwind-merge';
import { PiArrowClockwiseBold } from 'react-icons/pi';

const RedoButton = ({
  className,
  onRedo,
  disabled,
}: {
  className?: string;
  onRedo: () => void;
  disabled: boolean;
}) => {
  return (
    <IconButton
      className={twMerge(
        'rounded-full size-8 border border-neutral-300 disabled:bg-neutral-300 disabled:text-neutral-600',
        className
      )}
      onClick={onRedo}
      disabled={disabled}
    >
      <PiArrowClockwiseBold />
    </IconButton>
  );
};

export default RedoButton;
