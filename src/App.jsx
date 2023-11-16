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
import AddProducts from './pages/AddProducts';
import Category from './pages/Category';
import Subcategory from './pages/Subcategory';
import AddBrand from './pages/AddBrand';
import AddCoupon from './pages/AddCoupon';
import AddShop from './pages/AddShop';
import AddUser from './pages/AddUser';
import AddSupplier from './pages/AddSupplier';
import {  ThemeContextProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          >
            <Route
              index
              element={<Dashboard />}
            />
            <Route
              path="/manage-product"
              element={<ManageProduct />}
            />
            <Route
              path="/manage-orders"
              element={<ManageOrders />}
            />
            <Route
              path="/manage-orders/order-details"
              element={<OrderDetails />}
            />
            <Route
              path="/add-product"
              element={<AddProducts />}
            />
            <Route
              path="/category"
              element={<Category />}
            />
            <Route
              path="/sub-category"
              element={<Subcategory />}
            />
            <Route
              path="/add-brand"
              element={<AddBrand />}
            />
            <Route
              path="/add-coupon"
              element={<AddCoupon />}
            />
            <Route
              path="/add-shop"
              element={<AddShop />}
            />
            <Route
              path="/add-user"
              element={<AddUser />}
            />
            <Route
              path="/add-supplier"
              element={<AddSupplier />}
            />
          </Route>
          <Route
            path="/register"
            element={<RegisterLayout />}
          >
            <Route />
          </Route>
        </Routes>
        <Toaster position="top-center" />
      </BrowserRouter>
    </ThemeContextProvider>
  );
}
export default App;
