import IconButton from '@/components/IconButton';
import { twMerge } from 'tailwind-merge';
import { PiDownloadSimpleBold } from 'react-icons/pi';

const DownloadButton = ({
  className,
  onClick,
}: React.ComponentProps<'button'>) => {
  return (
    <IconButton
      className={twMerge(
        'rounded-full size-8 border border-neutral-300',
        className
      )}
      onClick={onClick}
    >
      <PiDownloadSimpleBold />
    </IconButton>
  );
};

export default DownloadButton;
