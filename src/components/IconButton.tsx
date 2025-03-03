import { twMerge } from 'tailwind-merge';

const IconButton = ({
  children,
  className,
  ...props
}: React.ComponentProps<'button'>) => {
  return (
    <button
      className={twMerge(
        'group text-2xl text-neutral-800 hover:bg-neutral-300 size-9 bg-neutral-200 rounded-sm flex justify-center items-center p-1.5 cursor-pointer transition-colors duration-200',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
