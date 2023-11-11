import React from 'react';

import TotalUsersCard from '../components/dashboard/TotalUsersCard';
import RecentOrders from '../components/dashboard/RecentOrders';
import RevenueReport from '../components/dashboard/RevenueReport';
import CommonSalesCard from '../components/dashboard/CommonSales';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center ">
      <TotalUsersCard />
      <div className="h-fit grid grid-cols-2 mt-5">
        <div className="grid grid-rows-2 ">
          <div className="flex flex-col w-full space-y-10 ">
            <RevenueReport />
            <RecentOrders />
          </div>
        </div>
        <div className="flex justify-end flex-1 w-full">
          <CommonSalesCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
