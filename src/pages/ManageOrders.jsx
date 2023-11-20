import React from 'react';

import OrderCard from '../components/OrderCard';

const ManageOrders = () => {
  return (
    <>
      <div className="m-5 text-black dark:text-white">
        <div>
          <OrderCard />
        </div>
      </div>
    </>
  );
};

export default ManageOrders;
