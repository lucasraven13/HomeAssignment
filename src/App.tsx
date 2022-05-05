import { useState } from 'react';
import Topbar from './components/topbar';
import Sidebar from './components/sidebar';
import Main from './components/main';
import ActiveItemContext, {
  ActiveItemContextInterface,
} from './utility/active-item-context';
import { Folder, Item } from './utility/types';

export const App = function App() {
  const [item, setItem] = useState<Folder | Item | null>(null);

  const appContext: ActiveItemContextInterface = {
    item: item,
    setActiveItem: setItem,
  };

  return (
    <div className="h-screen">
      <Topbar />
      <div className="flex content-container border-t-0 border-custom">
        <ActiveItemContext.Provider value={appContext}>
          <Sidebar />
          <Main />
        </ActiveItemContext.Provider>
      </div>
    </div>
  );
};
