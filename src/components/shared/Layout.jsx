import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function Layout() {
  const [darkMode] = useContext(ThemeContext);

  return (
    <div className={`${darkMode && 'dark'}`}>
      <div className="flex flex-row font-serif bg-neutral-100 dark:bg-[#171716] h-screen w-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <div className="flex-1 p-4 min-h-0 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
