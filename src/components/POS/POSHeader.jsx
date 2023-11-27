function POSHeader() {
  return (
    <div className="p-5 flex items-center justify-center bg- ">
      <div className="flex space-x-2">
        <input
          type="text"
          className="w-80 xl:h-12 h-10 pl-3 text-sm border-2 border-white bg-neutral-100 dark:bg-neutral-600 text-black dark:text-white rounded-full  focus:border-green-400 focus:ring-green-200 focus:outline-none focus:ring focus:ring-opacity-50"
          placeholder="Search..."
        />
        <button className="px-4 text-white bg-green-700 rounded-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default POSHeader;
