import axios from 'axios';
import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';

import Input from '../components/Input';
import CreateButton from '../components/CreateButton';

function AddFactory() {
  const [loading, setLoading] = useState(false);

  const active = true;
  const [name, setName] = useState('');

  const [suppliers, setSuppliers] = useState([]);
  const [products, setProducts] = useState([]);

  const [location, setLocation] = useState({
    street: undefined,
    city: undefined,
    state: undefined,
    country: undefined,
    zipCode: undefined,
  });

  const [contact, setContact] = useState({
    email: undefined,
    phone: undefined,
  });

  useEffect(() => {
    fetchSuppliers();
    fetchProducts();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const { data } = await axios.get(
        'https://shopping-api-7cy0.onrender.com/api/supplier'
      );
      setSuppliers(data);
    } catch (e) {
      toast.error('Error while loading suppliers: ' + e);
    }
  };

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        'https://shopping-api-7cy0.onrender.com/api/products'
      );
      setProducts(data);
    } catch (error) {}
  };

  const suppliersOptions =
    suppliers.data &&
    Object.values(suppliers.data).map((item, index) => (
      <option
        key={index}
        value={suppliers.data[index]._id}
      >
        {suppliers.data[index].name}
      </option>
    ));

  const productsOptions =
    products.data &&
    Object.values(products.data).map((item, index) => (
      <option
        key={index}
        value={products.data[index]._id}
      >
        {products.data[index].title}
      </option>
    ));

  const createFactory = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // phoneValidation = true;
      setLoading(true);
      await axios.post(
        'https://shopping-api-7cy0.onrender.com/api/factory',
        {
          name,
          address: location,
          contact,
          suppliers,
          products,
        }
      );
      toast.success('Shop added successfully');
      setLoading(false);
    } catch (error) {
      toast.error('Error while creating shop!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={createFactory}>
      <div className="mx-5 text-2xl font-semibold flex flex-col gap-4 text-black dark:text-white">
        <div className="flex 2xl:flex-row justify-evenly sm:flex-col animate-fadeup">
          {/* Inputs */}
          <div className="flex flex-col">
            <Input
              title={'Factory Name'}
              placeholder={'Enter shop name...'}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              name={'street'}
              title={'Factory Address'}
              placeholder={'Enter shop address...'}
              // value={location.street}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Input
              name={'address'}
              title={'Contact'}
              placeholder={'Enter shop address...'}
              value={location.street}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          {/* Drop Downs */}
          <div className="flex flex-col">
            <label className="mb-0">Supplier ID</label>
            <select
              onChange={(e) => setSuppliers(e.target.value)}
              className="2xl:w-[400px] lg:w-[300px] md:w-[300px] xl:h-12 h-10 text-[16px] border border-green-400 focus:border-white pl-3 bg-neutral-100 dark:bg-neutral-600 text-black dark:text-white rounded-lg"
            >
              <option
                disabled
                selected
                className="font-bold text-black"
              >
                Please Select Supplier
              </option>
              {suppliersOptions}
            </select>
            <label className="mb-0">Product Name</label>
            <select
              onChange={(e) => setProducts(e.target.value)}
              className="2xl:w-[400px] lg:w-[300px] md:w-[300px] xl:h-12 h-10 text-[16px] border border-green-400 focus:border-white pl-3 bg-neutral-100 dark:bg-neutral-600 text-black dark:text-white rounded-lg"
            >
              <option
                disabled
                selected
                className="font-bold text-black"
              >
                Please Select a Product
              </option>
              {productsOptions}
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <CreateButton loading={loading} />
      </div>
    </form>
  );
}

export default AddFactory;
