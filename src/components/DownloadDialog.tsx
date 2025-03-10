import Dialog, {
  DialogContent,
  DialogHeader,
  DialogWrapper,
} from '@/components/Dialog';
import IconButton from '@/components/IconButton';
import type { IconFormat } from '@/types';
import { MdImage } from 'react-icons/md';

const DownloadDialog = ({
  onDownload,
  onClose,
}: {
  onDownload: (format: IconFormat) => void;
  onClose: () => void;
}) => {
  return (
    <Dialog onClose={onClose}>
      <DialogWrapper>
        <DialogHeader onClose={onClose} label='Download' />
        <DialogContent className='space-y-1.5'>
          <IconButton
            className='h-auto w-full gap-1.5 text-xl'
            onClick={() => {
              onDownload('png');
              onClose();
            }}
          >
            <MdImage />
            <span className='text-sm font-semibold'>Download as PNG</span>
          </IconButton>
          <IconButton
            className='h-auto w-full gap-1.5 text-xl'
            onClick={() => {
              onDownload('svg');
              onClose();
            }}
          >
            <MdImage />
            <span className='text-sm font-semibold'>Download as SVG</span>
          </IconButton>
        </DialogContent>
      </DialogWrapper>
    </Dialog>
  );
};

export default DownloadDialog;
