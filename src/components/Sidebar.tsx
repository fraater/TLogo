import { IconType } from 'react-icons';
import { MdDesignServices, MdPhotoLibrary } from 'react-icons/md';

const Sidebar = () => {
  return (
    <aside className='space-y-2.5 px-2.5 flex flex-col'>
      <SidebarElement Icon={MdDesignServices} />
      <SidebarElement Icon={MdPhotoLibrary} />
    </aside>
  );
};

const SidebarElement = ({ Icon }: { Icon: IconType }) => {
  return (
    <button className='hover:text-amber-600 text-neutral-600 cursor-pointer bg-white rounded-xl shadow-sm transition-colors duration-200'>
      <Icon className='size-10 p-2' />
    </button>
  );
};

export default Sidebar;
