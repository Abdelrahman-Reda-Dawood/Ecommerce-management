import './App.css';

import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/shared/Layout';
import RegisterLayout from './components/shared/register/RegisterLayout';
import Dashboard from './pages/Dashboard';
import ManageOrders from './pages/ManageOrders';
import ManageProduct from './pages/ManageProduct';
import OrderDetails from './pages/OrderDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/manage-product" element={<ManageProduct />} />
          <Route path="/manage-order" element={<ManageOrders />} />
          <Route
            path="/manage-order/order-details"
            element={<OrderDetails />}
          />
        </Route>
        <Route path="/register" element={<RegisterLayout />}>
          <Route />
        </Route>
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}
export default App;
