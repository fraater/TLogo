import GridBackground from '@/components/GridBackground';
import DownloadButton from '@/components/DownloadButton';
import type { IconData } from '@/types';
import { useRef } from 'react';
import { toPng } from 'html-to-image';

const Editor = ({ iconData }: { iconData: IconData }) => {
  const iconRef = useRef<HTMLDivElement | null>(null);
  const { icon, background } = iconData;

  const handleDownload = () => {
    iconRef.current &&
      toPng(iconRef.current).then((dataURL) => {
        const link = document.createElement('a');
        link.download = 'TLogo-icon.png';
        link.href = dataURL;
        link.click();
      });
  };

  return (
    <section className='flex-[1] shadow-sm ml-3 relative'>
      <GridBackground className='flex justify-center items-center'>
        <div
          className='h-1/2 aspect-square bg-neutral-300/15 border-2 border-dashed border-neutral-300/35'
          style={{ padding: background.padding + 'px' }}
        >
          <div
            ref={iconRef}
            className='bg-black size-full flex justify-center items-center'
            style={{ borderRadius: background.rounded + 'px' }}
          >
            <icon.Icon
              className='text-white'
              style={{ fontSize: icon.size + 'px' }}
            />
          </div>
        </div>
        <DownloadButton
          className='absolute right-3 bottom-3'
          onDownload={handleDownload}
        />
      </GridBackground>
    </section>
  );
};

export default Editor;
