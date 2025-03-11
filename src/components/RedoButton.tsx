import IconButton from '@/components/IconButton';
import { twMerge } from 'tailwind-merge';
import { MdRedo } from 'react-icons/md';

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
        'rounded-full size-8 border border-neutral-300 disabled:bg-neutral-300',
        className
      )}
      onClick={onRedo}
      disabled={disabled}
    >
      <MdRedo />
    </IconButton>
  );
};

export default RedoButton;
