import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { ThemeContext } from '../../context/ThemeContext';
import { navigationData } from '../../lib/constants/navigationData';

const linkClasses =
  'dark flex items-center gap-2 px-3 py-3 hover:bg-primarygreen hover:text-white rounded-md text-xl font-semibold';

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? 'text-white dark:text-white bg-gradient-to-r from-[#066135] border-r-2 border-r-green-600 rounded-none'
          : 'dark:text-gray-300 text-black',
        linkClasses
      )}
    >
      <span>{item.icon} </span>
      {item.title}
    </Link>
  );
}

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div >
      <div className="flex flex-col lg:w-72 h-screen w-64 p-3 text-white bg-neutral-300 dark:bg-[#292927]">
        <div className="px-1 py-3">
          <Link
            to={'/'}
            className={`text-4xl font-bold  ${
              pathname === '/'
                ? 'text-green-700 dark:text-green-500 '
                : 'text-black dark:text-neutral-100'
            }`}
          >
            SPRINT
          </Link>
        </div>
        <div className="2xl:py-8 flex flex-1 flex-col gap-0.5">
          {navigationData.map((item) => (
            <SidebarLink
              key={item.title}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
