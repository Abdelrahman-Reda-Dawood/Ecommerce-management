import './App.css';

import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeContextProvider } from './context/ThemeContext';
import RegisterLayout from './components/register/RegisterLayout';
import Layout from './components/shared/Layout';
import AddBrand from './pages/AddBrand';
import AddCategory from './pages/AddCategory';
import AddProducts from './pages/AddProducts';
import AddShop from './pages/AddShop';
import AddSupplier from './pages/AddSupplier';
import AddUser from './pages/AddUser';
import Dashboard from './pages/Dashboard';
import ManageOrders from './pages/ManageOrders';
import Products from './pages/Products';
import OrderDetails from './pages/OrderDetails';
import Subcategory from './pages/Subcategory';
import POS from './pages/POS';
import NotFound from './components/NotFound';

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Toaster />
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
              element={<Products />}
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
              path="/add-category"
              element={<AddCategory />}
            />
            <Route
              path="/sub-category"
              element={<Subcategory />}
            />
            <Route
              path="/add-brand"
              element={<AddBrand />}
            />
            {/* <Route
              path="/add-coupon"
              element={<AddCoupon />}
            /> */}
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
          />
          <Route
            path="/pos"
            element={<POS />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}
export default App;
