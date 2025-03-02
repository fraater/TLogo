import GridBackground from '@/components/GridBackground';
import type { IconData } from '@/types';

const Editor = ({ iconData }: { iconData: IconData }) => {
  const { icon, background } = iconData;

  return (
    <section className='flex-[1] shadow-sm ml-3 relative'>
      <GridBackground className='flex justify-center items-center'>
        <div
          className='h-1/2 aspect-square bg-neutral-300/15 border-2 border-dashed border-neutral-300/35'
          style={{ padding: background.padding + 'px' }}
        >
          <div
            className='bg-black size-full flex justify-center items-center'
            style={{ borderRadius: background.rounded + 'px' }}
          >
            <icon.Icon
              className='text-white'
              style={{ fontSize: icon.size + 'px' }}
            />
          </div>
        </div>
      </GridBackground>
    </section>
  );
};

export default Editor;
