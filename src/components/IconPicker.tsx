import * as LucideIcons from 'react-icons/lu';
import IconButton from '@/components/IconButton';
import type { IconType } from 'react-icons';
import { MdClose } from 'react-icons/md';

const IconPicker = ({
  onChange,
  onClose,
}: {
  onChange: (Icon: IconType) => void;
  onClose: () => void;
}) => {
  return (
    <section
      className='fixed bg-neutral-400/40 inset-0 h-full w-full z-30 flex justify-center items-center'
      onClick={(e) => e.target == e.currentTarget && onClose()}
    >
      <div className='h-11/12 bg-white shadow-sm py-4 px-5 rounded-xl flex flex-col'>
        <div className='flex justify-between items-center'>
          <span className='font-semibold text-neutral-800'>Pick an icon</span>
          <IconButton
            className='bg-transparent size-5.5 p-0.5'
            onClick={() => onClose()}
          >
            <MdClose />
          </IconButton>
        </div>
        <div className='grid grid-cols-8 overflow-y-auto overflow-x-hidden gap-2 mt-4 pr-5'>
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
        </div>
      </div>
    </section>
  );
};

export default IconPicker;
