import IconButton from '@/components/IconButton';
import { twMerge } from 'tailwind-merge';
import { PiArrowCounterClockwiseBold } from 'react-icons/pi';

const UndoButton = ({
  className,
  onUndo,
  disabled,
}: {
  className?: string;
  onUndo: () => void;
  disabled: boolean;
}) => {
  return (
    <IconButton
      className={twMerge(
        'rounded-full size-8 border border-neutral-300 disabled:bg-neutral-300 disabled:text-neutral-600',
        className
      )}
      onClick={onUndo}
      disabled={disabled}
    >
      <PiArrowCounterClockwiseBold />
    </IconButton>
  );
};

export default UndoButton;
