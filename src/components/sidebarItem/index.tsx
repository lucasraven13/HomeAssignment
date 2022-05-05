import React from 'react';
import ActiveItemContext from '../../utility/active-item-context';
import { Item } from '../../utility/types';

const SidebarItem: React.FC<Item> = (props) => {
  const handleClick = () => {
    appContext.setActiveItem(props);
  };
  const { name } = props;
  const appContext = React.useContext(ActiveItemContext);

  return (
    <div className={`p-1 select-none cursor-pointer`} onClick={handleClick}>
      {name}
    </div>
  );
};

export default SidebarItem;
