import Panel from '@/components/Panel';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

const App = () => {
  const [panelId, setPanelId] = useState<number>(1);

  return (
    <main className='flex h-screen p-3 pl-0'>
      <Sidebar onClick={(id) => setPanelId(id)} />
      <Panel id={panelId} />
      <section className='bg-white flex-[1] p-4 shadow-sm ml-3'>TODO</section>
    </main>
  );
};

export default App;
