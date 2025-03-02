import IconPanel from '@/components/IconPanel';
import BackgroundPanel from '@/components/BackgroundPanel';

const Panel = ({ id }: { id: number }) => {
  let PanelContent: (() => JSX.Element) | null = null;

  switch (id) {
    case 1:
      PanelContent = IconPanel;
      break;
    case 2:
      PanelContent = BackgroundPanel;
      break;
  }

  return (
    <section className='bg-white rounded-xl p-3.5 shadow-sm w-44 space-y-5.5'>
      {PanelContent && <PanelContent />}
    </section>
  );
};

const PanelElement = ({ children }: { children: React.ReactNode }) => {
  return <div className='space-y-1.5'>{children}</div>;
};

const PanelElementLabel = ({
  lLabel,
  rLabel,
}: {
  lLabel: string;
  rLabel?: string;
}) => {
  return (
    <div className='flex justify-between items-center text-neutral-800'>
      <span className='text-sm'>{lLabel}</span>
      {rLabel && <span className='text-xs'>{rLabel}</span>}
    </div>
  );
};

const PanelElementContent = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default Panel;
export { PanelElement, PanelElementLabel, PanelElementContent };
