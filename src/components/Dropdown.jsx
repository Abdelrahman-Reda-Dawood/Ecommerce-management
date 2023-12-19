import React, { useState } from 'react';

export default function Dropdown({ title, initTitle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuTitle, setMenuTitle] = useState(initTitle);

  const updateMenu = ({ item }) => {
    setMenuTitle(item);
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col items-center w-max h-[90px] rounded-lg">
      <button
        type="reset"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between gap-3 bg-neutral-100 dark:bg-neutral-600 px-4 py-2 font-bold text-base rounded-lg border-4 border-transparent focus:border-white duration-300 active:text-white"
      >
        {menuTitle}
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="flex flex-col absolute top-14 p-2 text-center bg-neutral-100 dark:bg-neutral-600 rounded-lg ">
          {title.map((item, i) => (
            <div
              key={i}
              className="hover:bg-neutral-300 dark:hover:bg-neutral-800 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-primarygreen border-l-4"
            >
              <h3
                onClick={() => updateMenu({ item })}
                className="m-1 font-bold text-base"
              >
                {item}
              </h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
