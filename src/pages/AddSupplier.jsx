import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

import Input from '../components/Input';
import CreateButton from '../components/CreateButton';

const AddSupplier = () => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [productType, setProductType] = useState('');
  const [netPorfit, setNetProfit] = useState('');

  const createSupplier = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        'https://shopping-api-7cy0.onrender.com/api/supplier',
        {
          name,
          phone,
          productType,
          NetPorfit: netPorfit,
        }
      );
      toast.success('Supplier added successfully');
      setLoading(false);
    } catch (error) {
      toast.error('Error Creating Supplier');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={createSupplier}
      className="m-7 text-2xl font-semibold flex flex-col gap-4 text-black dark:text-white animate-fadeup"
    >
      <Input
        title={'Name'}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={'Enter Name...'}
      />
      <Input
        title={'Phone'}
        type={'number'}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder={'02-000-000-000'}
      />
      <Input
        title={'Product Type'}
        value={productType}
        onChange={(e) => setProductType(e.target.value)}
        placeholder={'Product Type... '}
      />
      <Input
        title={'Net Profit'}
        type={'number'}
        value={netPorfit}
        onChange={(e) => setNetProfit(e.target.value)}
        placeholder={'Enter net Profit...'}
      />
      <CreateButton loading={loading} />
    </form>
  );
};

export default AddSupplier;
