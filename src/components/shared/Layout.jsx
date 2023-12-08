import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import Header from './Header';
import Sidebar from './Sidebar';
import { ThemeContext } from '../../context/ThemeContext';

function Layout() {
  const [theme, setTheme] = useContext(ThemeContext);

  function getThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }

  const toggleDarkMode = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);

      prevTheme === 'light'
        ? toast('Dark Mode!', {
            id: 'theme',
            icon: '🌚',
            style: { color: 'white', background: '#999999' },
          })
        : toast('Light Mode!', { id: 'theme', icon: '🌝' });

      return newTheme;
    });
  };

  useEffect(() => {
    getThemeFromLocalStorage();
  });

  return (
    <div className={`${theme}`}>
      <div className="flex flex-row font-serif bg-stone-200 dark:bg-[#171716] h-screen w-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header
            theme={theme}
            toggleDarkMode={toggleDarkMode}
          />
          <div className="flex-1 p-4 min-h-0 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
