import IconButton from '@/components/IconButton';
import { twMerge } from 'tailwind-merge';
import { MdSaveAlt } from 'react-icons/md';

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
      <MdSaveAlt />
    </IconButton>
  );
};

export default DownloadButton;
