import React from 'react';

import cardImage from '../assets/Image1.png';
import OrderCard from '../components/OrderCard';
import ClientDetailsCard from '../components/ClientDetailsCard';

const OrderDetails = ({
  image = cardImage,
  orderNum,
  date,
  payStatus,
  payMethod,
  DeliveryStatus,
}) => {
  return (
    <div className="m-3 text-white animate-fadedown">
      <OrderCard image={cardImage} />
      <ClientDetailsCard />
    </div>
  );
};

export default OrderDetails;
