import IconButton from '@/components/IconButton';
import { PiXBold } from 'react-icons/pi';
import { twMerge } from 'tailwind-merge';
import { cn } from '@/utils';

const Dialog = ({
  className,
  children,
  onClose,
  ...props
}: React.ComponentProps<'section'> & { onClose: () => void }) => {
  return (
    <section
      className={twMerge(
        'fixed bg-neutral-400/40 inset-0 size-full z-30 flex justify-center items-center',
        className
      )}
      onClick={(e) => e.target == e.currentTarget && onClose()}
      {...props}
    >
      {children}
    </section>
  );
};

const DialogWrapper = ({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      className={twMerge(
        'bg-white shadow-sm py-4 px-5 rounded-xl flex flex-col',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const DialogHeader = ({
  className,
  onClose,
  label,
  ...props
}: React.ComponentProps<'div'> & { onClose: () => void; label?: string }) => {
  return (
    <div
      className={twMerge('flex justify-between items-center mb-4', className)}
      {...props}
    >
      {label && <span className='font-semibold text-neutral-800'>{label}</span>}
      <IconButton
        className={cn('bg-transparent size-5 p-0.5', { 'ml-auto': !label })}
        onClick={() => onClose()}
      >
        <PiXBold />
      </IconButton>
    </div>
  );
};

const DialogContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default Dialog;
export { DialogWrapper, DialogHeader, DialogContent };
