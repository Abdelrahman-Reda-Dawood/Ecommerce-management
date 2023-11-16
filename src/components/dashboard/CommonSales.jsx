import React from 'react';

import ProductCard from '../ProductCard';
import Pie from '../charts/Pie';

const CommonSales = () => {
  return (
    <div className="flex flex-col h-fit 2xl:w-[360px] xl:w-[340px] lg:w-[280px] md:w-[220px] sm:w-[180px] xs:w[120px]  gap-3 rounded-2xl text:black dark:text-white text-lg bg-neutral-300 dark:bg-[#292927]">
      {/* Top Section */}
      <div>
        <h1 className="px-3 pt-3 font-semibold text-xl">
          Common Sales Category
        </h1>
        <Pie />
      </div>
      <div className="self-center h-[1px] bg-stone-500" />
      {/* Bot Section */}
      <div className="flex flex-col items-center m-3">
        <h1 className=" px-3 pb-2 font-semibold text-xl">
          Top Products
        </h1>
        <ProductCard buttons={false} />
      </div>
    </div>
  );
};

export default CommonSales;
