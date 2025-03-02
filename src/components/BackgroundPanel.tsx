import Slider from '@/components/Slider';
import {
  PanelElement,
  PanelElementContent,
  PanelElementLabel,
} from '@/components/Panel';
import type { IconData } from '@/types';

const BackgroundPanel = ({
  iconData,
  onChange,
}: {
  iconData: IconData;
  onChange: (data: IconData) => void;
}) => {
  const { background } = iconData;

  return (
    <>
      <PanelElement>
        <PanelElementLabel
          lLabel='Rounded'
          rLabel={`${background.rounded} px`}
        />
        <PanelElementContent>
          <Slider
            value={background.rounded}
            onChange={(e) =>
              onChange({
                ...iconData,
                background: { ...background, rounded: Number(e.target.value) },
              })
            }
          />
        </PanelElementContent>
      </PanelElement>

      <PanelElement>
        <PanelElementLabel
          lLabel='Padding'
          rLabel={`${background.padding} px`}
        />
        <PanelElementContent>
          <Slider
            value={background.padding}
            onChange={(e) =>
              onChange({
                ...iconData,
                background: { ...background, padding: Number(e.target.value) },
              })
            }
          />
        </PanelElementContent>
      </PanelElement>
    </>
  );
};

export default BackgroundPanel;
