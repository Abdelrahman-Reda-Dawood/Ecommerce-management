import React, { useContext } from 'react';

import RegisterSidebar from './RegisterSidebar';
import RegisterIndex from './RegisterIndex';
import { ThemeContext } from '../../context/ThemeContext';

function Layout() {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <div className="flex bg-stone-200 dark:bg-[#171716] h-screen overflow-hidden ">
        <RegisterSidebar />
        <div className=" flex items-center">
          <RegisterIndex />
        </div>
      </div>
    </div>
  );
}

export default Layout;
