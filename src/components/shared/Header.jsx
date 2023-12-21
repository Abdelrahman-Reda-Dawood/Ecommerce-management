import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { getUser } from '../../utils/getUser';

const Header = ({ theme, toggleDarkMode }) => {
  const navigate = useNavigate();

  const [localStorageUser] = useState(getUser());

  async function handleLogout() {
    const isConfirm = await Swal.fire({
      title: 'Sure to Logout?',
      text: 'You are about to log out',
      icon: 'warning',
      showCancelButton: true,
      background: `${theme === 'dark' ? '#292927' : '#fff'}`,
      color: `${theme === 'dark' ? '#fff' : '#000'}`,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm',
    }).then((result) => {
      return result.isConfirmed;
    });

    if (!isConfirm) {
      return;
    }
    localStorage.removeItem('user');
    navigate('/register');
  }

  return (
    <div className={`${theme}`}>
      <main className="h-20 p-5 flex lg:justify-between sm:justify-start items-center bg-neutral-300 dark:bg-darkbg dark:text-white text-3xl ">
        <p className="animate-fadedown transition-none">
          Good Morning
          <span className="capitalize transition-none">
            {' '}
            {localStorageUser.user.name}
          </span>
        </p>
        <div className="flex">
          <button
            onClick={handleLogout}
            className="flex m-4 w-9 h-9 justify-center items-center bg-white rounded-full border border-stone-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
          <button
            onClick={toggleDarkMode}
            className={`m-4 w-9 h-9 justify-center items-center flex rounded-full ${
              theme === 'dark' ? 'bg-orange-400' : 'bg-gray-800'
            }`}
          >
            {theme === 'light' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-6 h-6 duration-1000 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Header;
