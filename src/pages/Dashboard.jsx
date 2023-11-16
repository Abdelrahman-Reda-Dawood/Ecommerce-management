import React from 'react';

import TotalUsersCard from '../components/dashboard/TotalUsersCard';
import RecentOrders from '../components/dashboard/RecentOrders';
import RevenueReport from '../components/dashboard/RevenueReport';
import CommonSalesCard from '../components/dashboard/CommonSales';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <TotalUsersCard />
      <div className="flex flex-row gap-8">
        <div className='flex flex-col gap-5'>
        <RevenueReport />
        <RecentOrders />
        </div>
        <CommonSalesCard />
      </div>
    </div>
  );
};

export default Dashboard;
