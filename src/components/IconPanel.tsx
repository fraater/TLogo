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
          <button>
            <LuCarrot />
          </button>
        </PanelElementContent>
      </PanelElement>

      <PanelElement>
        <PanelElementLabel lLabel='Size' rLabel='200px' />
        <PanelElementContent>
          <input type='range' />
        </PanelElementContent>
      </PanelElement>
    </>
  );
};

export default IconPanel;
