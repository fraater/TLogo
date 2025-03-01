import { IconType } from 'react-icons';
import { MdDesignServices, MdPhotoLibrary } from 'react-icons/md';

const Sidebar = ({ onClick }: { onClick: (id: number) => void }) => {
  return (
    <aside className='space-y-2.5 px-2.5 flex flex-col'>
      <SidebarElement Icon={MdDesignServices} onClick={onClick} id={1} />
      <SidebarElement Icon={MdPhotoLibrary} onClick={onClick} id={2} />
    </aside>
  );
};

const SidebarElement = ({
  Icon,
  onClick,
  id,
}: {
  Icon: IconType;
  onClick: (id: number) => void;
  id: number;
}) => {
  return (
    <button
      className='hover:text-amber-600 text-neutral-600 cursor-pointer bg-white rounded-xl shadow-sm transition-colors duration-200'
      onClick={() => onClick(id)}
    >
      <Icon className='size-10 p-2' />
    </button>
  );
};

export default Sidebar;
