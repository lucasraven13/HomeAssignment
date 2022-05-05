import React from 'react';
import { Folder, Item } from './types/index';

export interface ActiveItemContextInterface {
  item: Folder | Item | null;
  setActiveItem: (treeItem: Folder | Item) => void;
}

const ActiveItemContext = React.createContext<ActiveItemContextInterface>({
  item: null,
  setActiveItem: () => {},
});

export default ActiveItemContext;
