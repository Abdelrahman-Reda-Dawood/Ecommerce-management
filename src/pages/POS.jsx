import { useContext } from 'react';

import CheckoutCard from '../components/POS/CheckoutCard';
import POSHeader from '../components/POS/POSHeader';
import POSProductCard from '../components/POS/POSProductCard';
import POSSidebar from '../components/POS/POSSidebar';
import { ThemeContext } from '../context/ThemeContext';

function POS() {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <div
        className="flex flex-row bg-stone-200 dark:bg-[#171716]
       h-screen w-screen overflow-hidden font-sans"
      >
        <POSSidebar />
        <div className="flex flex-col flex-1">
          <POSHeader />
          <div className="flex flex-row py-5 overflow-auto">
            <div className="flex-1 mx-2 px-5 lg:px-0 grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 gap-5">
              <POSProductCard />
              <POSProductCard />
              <POSProductCard />
              <POSProductCard />
              <POSProductCard />
              <POSProductCard />
            </div>
            <div className="sticky top-0">
              <CheckoutCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default POS;
