import SidebarFolder from '../../components/sidebarFolder';
import SidebarItem from '../../components/sidebarItem';
import { Folder, Item } from '../types';

export function isFolder(treeItem: Folder | Item): treeItem is Folder {
  return (treeItem as Folder).type === 'folder';
}

class SideBarComponentFactory {
  static createComponent(treeItem: Folder | Item) {
    return (
      <div key={treeItem.id}>
        {isFolder(treeItem) && <SidebarFolder {...(treeItem as Folder)} />}
        {!isFolder(treeItem) && <SidebarItem {...(treeItem as Item)} />}
      </div>
    );
  }
}

export default SideBarComponentFactory;
