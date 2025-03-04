import type { IconType } from 'react-icons';
import { useState } from 'react';
import { MdDesignServices, MdPhotoLibrary } from 'react-icons/md';
import { cn } from '@/utils';

const sidebarElements = [
  {
    id: 1,
    Icon: MdDesignServices,
  },
  {
    id: 2,
    Icon: MdPhotoLibrary,
  },
];

const Sidebar = ({ onClick }: { onClick: (id: number) => void }) => {
  const [activeElement, setActiveElement] = useState<number>(1);

  return (
    <aside className='space-y-2.5 px-2.5 flex flex-col'>
      {sidebarElements.map((el) => (
        <SidebarElement
          Icon={el.Icon}
          id={el.id}
          onClick={(id) => {
            setActiveElement(id);
            onClick(id);
          }}
          isActive={activeElement == el.id}
        />
      ))}
    </aside>
  );
};

const SidebarElement = ({
  Icon,
  onClick,
  id,
  isActive,
}: {
  Icon: IconType;
  onClick: (id: number) => void;
  id: number;
  isActive: boolean;
}) => {
  return (
    <button
      className={cn(
        'hover:text-amber-600 text-neutral-600 cursor-pointer bg-white rounded-xl shadow-sm transition-colors duration-200',
        isActive && 'text-amber-600'
      )}
      onClick={() => onClick(id)}
    >
      <Icon className='size-10 p-2' />
    </button>
  );
};

export default Sidebar;
