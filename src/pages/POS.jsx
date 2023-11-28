import React, { useContext } from 'react';

import POSSidebar from '../components/POS/POSSidebar';
import POSHeader from '../components/POS/POSHeader';
import { ThemeContext } from '../context/ThemeContext';
import Checkout from '../components/POS/Checkout';

function POS() {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <div
        className="flex flex-row bg-stone-200 dark:bg-darkbg
       h-screen w-screen overflow-hidden font-sans"
      >
        <POSSidebar />
        <div className="flex flex-col flex-1">
          <POSHeader />
          <div
            className="flex flex-row justify-between h-full
           mx-5 my-3 bg-lightbg dark:bg-[#171716]/70  rounded-3xl "
          >
            <Checkout />
            <Checkout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default POS;
