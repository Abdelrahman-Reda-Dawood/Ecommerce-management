import { Link } from 'react-router-dom';
import { POSNavigationData } from '../../lib/constants/navigationData';

function SidebarLink({ item }) {
  return (
    <li className="hover:bg-gray-100 dark:hover:bg-primarygreen relative group">
      <Link
        to={item.path}
        className="h-16 px-6 flex justify-center items-center "
      >
        {item.icon}
        <p
          className="absolute left-full rounded-md px-2 py-1 ml-6 
          bg-green-100 text-black text-md text-center
          invisible opacity-20 -translate-x-3 
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0"
        >
          {item.title}
        </p>
      </Link>
    </li>
  );
}

function POSSidebar() {
  return (
    <div className="flex flex-col items-center bg-neutral-300 dark:bg-darkbg text-gray-700 dark:text-white shadow-md shadow-green-300 h-screen">
      {/* LOGO */}
      <div className="h-16 flex items-center w-full">
        <Link
          className="h-6 w-6 mx-auto"
          to={'/'}
        >
          <img
            className="h-6 w-6 mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Eo_circle_green_letter-s.svg"
            alt="logo"
          />
        </Link>
      </div>
      {/* List Items */}
      <ul>
        {POSNavigationData.map((item) => (
          <SidebarLink
            key={item.title}
            item={item}
          />
        ))}
      </ul>
      {/* Logout Button */}
      <div className="mt-auto h-16 flex items-center w-full">
        <button
          class="h-16 w-full mx-auto flex justify-center items-center
           focus:text-orange-500 hover:bg-red-200 dark:hover:bg-red-400 focus:outline-none"
        >
          <svg
            className="h-5 w-5 text-warning"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line
              x1="21"
              y1="12"
              x2="9"
              y2="12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default POSSidebar;
