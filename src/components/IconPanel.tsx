import Slider from '@/components/Slider';
import IconPicker from '@/components/IconPicker';
import IconButton from '@/components/IconButton';
import type { IconData } from '@/types';
import {
  PanelElement,
  PanelElementContent,
  PanelElementLabel,
} from '@/components/Panel';
import { useState } from 'react';

const IconPanel = ({
  iconData,
  onChange,
}: {
  iconData: IconData;
  onChange: (data: IconData) => void;
}) => {
  const [showIconPicker, setShowIconPicker] = useState<boolean>(false);
  const { icon } = iconData;

  return (
    <>
      <PanelElement>
        <PanelElementLabel
          lLabel='Icon'
          rLabel={icon.Icon.name
            .replace('Lu', '')
            .split(/(?=[A-Z])/)
            .join(' ')}
        />
        <PanelElementContent>
          <IconButton onClick={() => setShowIconPicker(true)}>
            <icon.Icon className='group-hover:scale-105' />
          </IconButton>
          {showIconPicker && (
            <IconPicker
              onChange={(Icon) =>
                onChange({ ...iconData, icon: { ...icon, Icon } })
              }
              onClose={() => setShowIconPicker(false)}
            />
          )}
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
