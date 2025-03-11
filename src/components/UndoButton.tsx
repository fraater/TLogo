import IconButton from '@/components/IconButton';
import { twMerge } from 'tailwind-merge';
import { MdUndo } from 'react-icons/md';

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
        'rounded-full size-8 border border-neutral-300 disabled:bg-neutral-300',
        className
      )}
      onClick={onUndo}
      disabled={disabled}
    >
      <MdUndo />
    </IconButton>
  );
};

export default UndoButton;
