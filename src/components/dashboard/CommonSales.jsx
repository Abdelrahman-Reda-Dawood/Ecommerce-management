import React from 'react';

import ProductCard from '../ProductCard';
import Pie from '../charts/Pie';

const CommonSales = () => {
  return (
    <div className="flex 2xl:flex-col xl:flex-col  h-fit w-fit  gap-3 rounded-2xl text:black dark:text-white text-lg bg-neutral-300 dark:bg-[#292927]">
      {/* Top Section */}
      <div>
        <h1 className="px-3 pt-3 font-semibold text-xl">
          Common Sales Category
        </h1>
        <Pie />
      </div>
      {/* Bot Section */}
      <div className="flex flex-col items-center m-3">
        <h1 className=" px-3 pb-2 font-semibold text-xl">Top Products</h1>
        <ProductCard buttons={false} />
      </div>
    </div>
  );
};

export default CommonSales;
