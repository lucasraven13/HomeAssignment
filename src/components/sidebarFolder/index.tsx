import React, { useMemo, useState } from 'react';
import {
  ChevronDoubleDownIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/solid';
import { Folder } from '../../utility/types';
import SideBarComponentFactory from '../../utility/factories/SideBarComponentFactory';
import ActiveItemContext from '../../utility/active-item-context';

const SidebarFolder: React.FC<Folder> = (props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const appContext = React.useContext(ActiveItemContext);
  const { id, name, children } = props;

  const handleClick = () => {
    if (!expanded) {
      appContext.setActiveItem(props);
    }
    setExpanded(!expanded);
  };

  const renderedChildren = useMemo(() => {
    return (
      children &&
      children.map((x) => SideBarComponentFactory.createComponent(x))
    );
  }, [children]);

  return (
    <div key={id} className="p-1 select-none cursor-pointer">
      <div onClick={handleClick}>
        {expanded && <ChevronDoubleDownIcon className="h-6 float-left" />}
        {!expanded && <ChevronDoubleRightIcon className="h-6 float-left" />}
        {name}
      </div>
      <div className={expanded ? 'p-3' : 'hidden'}>{renderedChildren}</div>
    </div>
  );
};

export default SidebarFolder;
