import Panel from '@/components/Panel';
import Sidebar from '@/components/Sidebar';
import Editor from '@/components/Editor';
import type { IconData } from '@/types';
import { useState } from 'react';
import { LuCarrot } from 'react-icons/lu';

const App = () => {
  const [panelId, setPanelId] = useState<number>(1);
  const [iconData, setIconData] = useState<IconData>({
    icon: {
      Icon: LuCarrot,
      size: 200,
    },
    background: {
      rounded: 50,
      padding: 10,
    },
  });

  return (
    <main className='flex h-screen p-3 pl-0'>
      <Sidebar onClick={(id) => setPanelId(id)} />
      <Panel
        id={panelId}
        iconData={iconData}
        onChange={(data) => setIconData(data)}
      />
      <Editor iconData={iconData} />
    </main>
  );
};

export default App;
