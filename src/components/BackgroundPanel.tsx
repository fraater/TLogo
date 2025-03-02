import Slider from '@/components/Slider';
import {
  PanelElement,
  PanelElementContent,
  PanelElementLabel,
} from '@/components/Panel';

const BackgroundPanel = () => {
  return (
    <>
      {/* TODO */}
      <PanelElement>
        <PanelElementLabel lLabel='Rounded' rLabel='10 px' />
        <PanelElementContent>
          <Slider />
        </PanelElementContent>
      </PanelElement>
    </>
  );
};

export default BackgroundPanel;
