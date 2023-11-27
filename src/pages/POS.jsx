import React, { useContext } from 'react';

import POSSidebar from '../components/POS/POSSidebar';
import POSHeader from '../components/POS/POSHeader';
import { ThemeContext } from '../context/ThemeContext';
import Checkout from '../components/POS/Checkout';

function POS() {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <div className="flex flex-row font-serif bg-stone-200 dark:bg-[#171716] h-screen w-screen overflow-hidden">
        <POSSidebar />
        <div className="flex flex-col flex-1">
          <POSHeader />
          <div className="flex-1 p-4 min-h-0 overflow-auto">
            <Checkout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default POS;
