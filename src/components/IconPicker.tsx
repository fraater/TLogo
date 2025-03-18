import * as LucideIcons from 'react-icons/lu';
import IconButton from '@/components/IconButton';
import type { IconType } from 'react-icons';
import Dialog, {
  DialogContent,
  DialogHeader,
  DialogWrapper,
} from '@/components/Dialog';
import { useState } from 'react';

const IconPicker = ({
  onChange,
  onClose,
}: {
  onChange: (Icon: IconType) => void;
  onClose: () => void;
}) => {
  const [iconSearch, setIconSearch] = useState<string>('');

  return (
    <Dialog onClose={onClose}>
      <DialogWrapper className='h-11/12'>
        <DialogHeader onClose={onClose} label='Pick an icon' />
        <DialogContent className='space-y-3 overflow-hidden flex flex-col items-start'>
          <input
            type='text'
            placeholder='Search icons'
            className='border border-neutral-300 focus:border-neutral-400/70 transition-colors duration-150 focus:outline-none rounded-sm px-2.5 py-1 text-sm text-neutral-800'
            value={iconSearch}
            onChange={(e) => setIconSearch(e.target.value)}
          />
          <div className='flex flex-wrap w-2xs md:w-sm xl:w-md overflow-y-auto gap-2'>
            {Object.values(LucideIcons).map(
              (Icon) =>
                Icon.name
                  .slice(2)
                  .toLowerCase()
                  .includes(iconSearch.toLowerCase()) && (
                  <IconButton
                    onClick={() => {
                      onChange(Icon);
                      onClose();
                    }}
                    key={Icon.name}
                  >
                    <Icon />
                  </IconButton>
                )
            )}
          </div>
        </DialogContent>
      </DialogWrapper>
    </Dialog>
  );
};

export default IconPicker;
