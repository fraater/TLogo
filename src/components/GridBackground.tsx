import { twMerge } from 'tailwind-merge';

const GridBackground = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        'absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,var(--color-neutral-100)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-100)_1px,transparent_1px)] bg-[size:20px_20px]',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GridBackground;
