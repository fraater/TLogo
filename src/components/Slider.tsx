import { twMerge } from 'tailwind-merge';

const Slider = ({ className, ...props }: React.ComponentProps<'input'>) => {
  return (
    <input type='range' className={twMerge('slider', className)} {...props} />
  );
};

export default Slider;
