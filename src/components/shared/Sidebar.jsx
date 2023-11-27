import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { navigationData } from '../../lib/constants/navigationData';

const linkClasses =
  'flex items-center gap-2 px-3 py-3 hover:bg-primarygreen hover:text-white rounded-md text-xl font-semibold';

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
    <div className="flex flex-col lg:w-72 h-screen w-64 p-3 text-white bg-neutral-300 dark:bg-darkbg">
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
      <div className="2xl:py-8 flex flex-1 flex-col gap-0.5 ">
        {navigationData.map((item) => (
          <SidebarLink
            key={item.title}
            item={item}
          />
        ))}
        <Link
          to={'/pos'}
          className={
            classNames(linkClasses) +
            'h-14 justify-center mt-auto text-green-700 dark:text-green-500 font-semibold transition-none'
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 transition-none"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
            />
          </svg>
          POS
        </Link>
      </div>
    </div>
  );
}
