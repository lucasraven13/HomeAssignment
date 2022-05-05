import React from 'react';
import ActiveItemContext from '../../utility/active-item-context';
import { isFolder } from '../../utility/factories/SideBarComponentFactory';
import { FolderIcon, DocumentIcon } from '@heroicons/react/solid';

const Main: React.FC = () => {
  const appContext = React.useContext(ActiveItemContext);

  return (
    <div className="w-100 pl-8 flex overflow-auto">
      {appContext.item && !isFolder(appContext.item) && (
        <div key={appContext.item.id}>
          <h1 className="text-xl font-bold">Preview</h1>
          <div>name: {appContext.item.name}</div>
          <div>type: {appContext.item.type}</div>
        </div>
      )}
      {appContext.item && isFolder(appContext.item) && (
        <div className="flex flex-wrap">
          {appContext.item.children.map((x) => {
            if (isFolder(x)) {
              return (
                <div className="w-1/4" key={x.id}>
                  <FolderIcon className="h-20" />
                  {x.name}
                </div>
              );
            } else {
              return (
                <div className="w-1/4" key={x.id}>
                  <DocumentIcon className="h-20" />
                  {x.name}
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Main;
