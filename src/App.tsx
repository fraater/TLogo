import Panel from '@/components/Panel';
import Sidebar from '@/components/Sidebar';
import Editor from '@/components/Editor';
import debounce from 'lodash.debounce';
import type { IconData } from '@/types';
import { useCallback, useState } from 'react';
import { LuCarrot } from 'react-icons/lu';

const App = () => {
  const [panelId, setPanelId] = useState<number>(1);
  const [iconDataHistory, setIconDataHistory] = useState<IconData[]>([
    {
      icon: {
        Icon: LuCarrot,
        size: 200,
        rotate: 0,
        borderWidth: 2,
        borderColor: '#000000',
        fillColor: '#ffffff',
      },
      background: {
        rounded: 50,
        padding: 10,
        bgColor: '#ff8000',
      },
    },
  ]);
  const [currentIconDataIndex, setCurrentIconDataIndex] = useState<number>(0);
  const [iconData, setIconData] = useState<IconData>(
    iconDataHistory[currentIconDataIndex]
  );

  const debouncedAddIconDataHistory = useCallback(
    debounce((data: IconData) => {
      setIconDataHistory((prev) => [
        ...prev.slice(0, currentIconDataIndex + 1),
        data,
      ]);

      setCurrentIconDataIndex((prev) => prev + 1);
    }, 300),
    [currentIconDataIndex]
  );

  const handleChange = (data: IconData) => {
    debouncedAddIconDataHistory(data);

    setIconData(data);
  };

  const handleUndo = () => {
    const currentIndex = currentIconDataIndex;

    setCurrentIconDataIndex(currentIndex - 1);
    setIconData(iconDataHistory[currentIndex - 1]);
  };

  const handleRedo = () => {
    const currentIndex = currentIconDataIndex;

    setCurrentIconDataIndex(currentIndex + 1);
    setIconData(iconDataHistory[currentIndex + 1]);
  };

  return (
    <main className='flex h-screen p-3 pl-0'>
      <Sidebar onClick={(id) => setPanelId(id)} />
      <Panel id={panelId} iconData={iconData} onChange={handleChange} />
      <Editor
        iconData={iconData}
        onUndo={handleUndo}
        onRedo={handleRedo}
        canUndo={currentIconDataIndex > 0}
        canRedo={currentIconDataIndex < iconDataHistory.length - 1}
      />
    </main>
  );
};

export default App;
