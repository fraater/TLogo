import IconButton from '@/components/IconButton';
import { twMerge } from 'tailwind-merge';
import { MdSaveAlt } from 'react-icons/md';

const DownloadButton = ({
  className,
  onDownload,
}: React.ComponentProps<'button'> & { onDownload: () => void }) => {
  return (
    <IconButton
      className={twMerge(
        'rounded-full size-8 border border-neutral-300',
        className
      )}
      onClick={onDownload}
    >
      <MdSaveAlt />
    </IconButton>
  );
};

export default DownloadButton;
