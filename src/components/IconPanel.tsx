import Slider from '@/components/Slider';
import {
  PanelElement,
  PanelElementContent,
  PanelElementLabel,
} from '@/components/Panel';
import type { IconData } from '@/types';

const IconPanel = ({
  iconData,
  onChange,
}: {
  iconData: IconData;
  onChange: (data: IconData) => void;
}) => {
  const { icon } = iconData;

  return (
    <>
      <PanelElement>
        <PanelElementLabel
          lLabel='Icon'
          rLabel={icon.Icon.name.replace('Lu', '')}
        />
        <PanelElementContent>
          <button className='group hover:bg-neutral-300 size-9 bg-neutral-200 rounded-sm flex justify-center items-center p-1.5 cursor-pointer transition-colors duration-200'>
            <icon.Icon className='text-2xl text-neutral-800 group-hover:scale-105' />
          </button>
        </PanelElementContent>
      </PanelElement>

      <PanelElement>
        <PanelElementLabel lLabel='Size' rLabel={`${icon.size} px`} />
        <PanelElementContent>
          <Slider
            min={50}
            max={200}
            value={icon.size}
            onChange={(e) =>
              onChange({
                ...iconData,
                icon: { ...icon, size: Number(e.target.value) },
              })
            }
          />
        </PanelElementContent>
      </PanelElement>
    </>
  );
};

export default IconPanel;
