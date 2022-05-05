import React, { useEffect, useCallback, useState } from 'react';
import SideBarComponentFactory from '../../utility/factories/SideBarComponentFactory';

const Sidebar: React.FC = () => {
  const [files, setFiles] = useState<any>();

  const fetchData = useCallback(async () => {
    const response = await fetch('/api/v1/tree');
    const data = await response.json();
    const sorted = [...data.response].sort((a: any, b: any) =>
      a.name > b.name ? 1 : -1
    );
    setFiles(sorted);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  return (
    <div className="min-w-300px pl-8 border-custom border-t-0 border-b-0 border-l-0 overflow-auto">
      {files &&
        files.map((x: any) => SideBarComponentFactory.createComponent(x))}
    </div>
  );
};

export default Sidebar;
