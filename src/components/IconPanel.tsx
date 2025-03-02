import Slider from '@/components/Slider';
import {
  PanelElement,
  PanelElementContent,
  PanelElementLabel,
} from '@/components/Panel';
import { LuCarrot } from 'react-icons/lu';

const IconPanel = () => {
  return (
    <>
      {/* TODO */}
      <PanelElement>
        <PanelElementLabel lLabel='Icon' rLabel='Carrot' />
        <PanelElementContent>
          <button className='group hover:bg-neutral-300 size-9 bg-neutral-200 rounded-sm flex justify-center items-center p-1.5 cursor-pointer transition-colors duration-200'>
            <LuCarrot className='text-2xl text-neutral-800 group-hover:scale-105' />
          </button>
        </PanelElementContent>
      </PanelElement>

      <PanelElement>
        <PanelElementLabel lLabel='Size' rLabel='200 px' />
        <PanelElementContent>
          <Slider />
        </PanelElementContent>
      </PanelElement>
    </>
  );
};

export default IconPanel;
