import * as LucideIcons from 'react-icons/lu';
import IconButton from '@/components/IconButton';
import type { IconType } from 'react-icons';
import Dialog, {
  DialogContent,
  DialogHeader,
  DialogWrapper,
} from '@/components/Dialog';

const IconPicker = ({
  onChange,
  onClose,
}: {
  onChange: (Icon: IconType) => void;
  onClose: () => void;
}) => {
  return (
    <Dialog onClose={onClose}>
      <DialogWrapper className='h-11/12'>
        <DialogHeader onClose={onClose} label='Pick an icon' />
        <DialogContent className='grid grid-cols-8 overflow-y-auto overflow-x-hidden gap-2 pr-5'>
          {Object.values(LucideIcons).map((Icon) => (
            <IconButton
              onClick={() => {
                onChange(Icon);
                onClose();
              }}
            >
              <Icon />
            </IconButton>
          ))}
        </DialogContent>
      </DialogWrapper>
    </Dialog>
  );
};

export default IconPicker;
