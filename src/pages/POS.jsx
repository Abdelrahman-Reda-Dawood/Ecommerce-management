import { useContext, useState } from 'react';

import CheckoutCard from '../components/POS/CheckoutCard';
import POSHeader from '../components/POS/POSHeader';
import POSSidebar from '../components/POS/POSSidebar';
import { ThemeContext } from '../context/ThemeContext';
import Products from './Products';

const POS = () => {
  const [theme] = useContext(ThemeContext);
  const [searchResult, setSearchResult] = useState('');

  function handleSearchCallback(childData) {
    setSearchResult(childData);
    console.log('POS search component : ' + childData);
  }

  return (
    <div className={`${theme}`}>
      <div
        className="flex flex-row bg-stone-200 dark:bg-[#171716]
       h-screen w-screen overflow-hidden font-sans"
      >
        <POSSidebar />
        <div className="flex flex-col flex-1">
          <POSHeader handleSearchCallback={handleSearchCallback} />
          <div className="flex flex-row py-5 overflow-auto">
            <Products
              searchResult={searchResult}
              buttons="bottom"
            />
            <div className="sticky top-0 py-0 overflow-y-auto">
              {<CheckoutCard />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POS;
