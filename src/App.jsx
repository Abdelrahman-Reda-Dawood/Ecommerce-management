import './App.css';

import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NotFound from './components/NotFound';
import RegisterLayout from './components/register/RegisterLayout';
import Layout from './components/shared/Layout';
import { ThemeContextProvider } from './context/ThemeContext';
import AddBrand from './pages/AddBrand';
import AddCategory from './pages/AddCategory';
import AddFactory from './pages/AddFactory';
import AddProducts from './pages/AddProducts';
import AddShop from './pages/AddShop';
import AddSupplier from './pages/AddSupplier';
import AddUser from './pages/AddUser';
import Dashboard from './pages/Dashboard';
import ManageOrders from './pages/ManageOrders';
import OrderDetails from './pages/OrderDetails';
import POS from './pages/POS';
import Products from './pages/Products';
import Subcategory from './pages/Subcategory';
import { getUser } from './utils/getUser';

function App() {
  useEffect(() => {
    console.log(user);
    getUser();
  });

  const mainRoute = (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          path="/"
          element={<Dashboard />}
        />
        <Route
          path={`/products`}
          element={<Products />}
        />
        <Route
          path={`/orders`}
          element={<ManageOrders />}
        />
        <Route
          path={`/orders/order-details`}
          element={<OrderDetails />}
        />
        <Route
          path={`/add/product`}
          element={<AddProducts />}
        />
        <Route
          path={`/add/category`}
          element={<AddCategory />}
        />
        <Route
          path={`/add/subcategory`}
          element={<Subcategory />}
        />
        <Route
          path={`/add/brand`}
          element={<AddBrand />}
        />
        <Route
          path={`/add/shop`}
          element={<AddShop />}
        />
        <Route
          path={`/add/user`}
          element={<AddUser />}
        />
        <Route
          path={`/add/supplier`}
          element={<AddSupplier />}
        />
        <Route
          path={`add/factory`}
          element={<AddFactory />}
        />
      </Route>

      {/* Register */}
      <Route
        path={`/register`}
        element={<RegisterLayout />}
      />

      <Route
        path={`/pos`}
        element={<POS />}
      />
      {/* Undefined Routes */}
      <Route
        path={`*`}
        element={<NotFound />}
      />
    </Routes>
  );

  const { user } = useSelector((state) => state.user);

  const [localStorageUser] = useState(getUser());

  return (
    <ThemeContextProvider>
      <BrowserRouter>
        {user || localStorageUser ? (
          mainRoute
        ) : (
          <Routes>
            <Route
              path={`/`}
              element={<RegisterLayout />}
            />
            <Route
              path={`*`}
              element={<NotFound />}
            />
            <Route
              path={`/register`}
              element={<RegisterLayout />}
            />
          </Routes>
        )}

        <Toaster />
      </BrowserRouter>
    </ThemeContextProvider>
  );
}
export default App;
