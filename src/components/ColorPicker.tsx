import type { ColorPickerBaseProps } from 'node_modules/react-colorful/dist/types';
import { HexAlphaColorPicker } from 'react-colorful';

const ColorPicker = ({ color, ...props }: ColorPickerBaseProps<string>) => {
  return (
    <div className='color-picker'>
      <HexAlphaColorPicker color={color} {...props} />
      <div className='flex justify-center pb-2.5'>
        <input
          type='text'
          value={color}
          readOnly
          className='text-xs border border-neutral-300 text-neutral-800 bg-neutral-100 w-9/12 text-center rounded-md py-0.5 focus:outline-none'
        />
      </div>
    </div>
  );
};

export default ColorPicker;
