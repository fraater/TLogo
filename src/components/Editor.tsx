import GridBackground from '@/components/GridBackground';
import DownloadButton from '@/components/DownloadButton';
import type { IconData, IconSize } from '@/types';
import { useEffect, useRef, useState } from 'react';
import { toPng } from 'html-to-image';

const Editor = ({ iconData }: { iconData: IconData }) => {
  const iconRef = useRef<HTMLDivElement | null>(null);
  const iconAreaRef = useRef<HTMLDivElement | null>(null);
  const [iconSize, setIconSize] = useState<IconSize | null>(null);
  const { icon, background } = iconData;

  useEffect(() => {
    if (iconAreaRef.current) {
      const { width, height } = iconAreaRef.current.getBoundingClientRect();

      setIconSize({ iconWidth: width, iconHeight: height });
    }
  });

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
        <div className='group flex flex-col space-y-2.5 items-center'>
          {iconSize && (
            <span className='group-hover:text-neutral-800 text-sm text-neutral-600 transition-colors duration-100'>
              [ {iconSize.iconWidth}px, {iconSize.iconHeight}px ]
            </span>
          )}
          <div
            ref={iconAreaRef}
            className='size-[200px] md:size-[300px] lg:size-[400px] xl:size-[600px] 2xl:size-[800px] group-hover:bg-neutral-300/45 group-hover:border-neutral-300/70 bg-neutral-300/20 border-2 border-dashed border-neutral-300/45 transition-colors duration-100'
            style={{ padding: background.padding + 'px' }}
          >
            <div
              ref={iconRef}
              className='size-full flex justify-center items-center'
              style={{
                borderRadius: background.rounded + 'px',
                backgroundColor: background.bgColor,
              }}
            >
              <icon.Icon
                size={icon.size}
                strokeWidth={icon.borderWidth}
                stroke={icon.borderColor}
                fill={icon.fillColor}
                style={{ rotate: icon.rotate + 'deg' }}
              />
            </div>
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
