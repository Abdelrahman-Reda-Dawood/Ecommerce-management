import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import CreateButton from '../components/CreateButton';
import { fetch } from '../utils/fetch';

const Subcategory = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    toast.dismiss();
    fetch({
      loading: true,
      routeName: 'categories',
      setData: setCategories,
    });
  }, []);

  const categorydropdown =
    categories.data &&
    Object.values(categories.data).map(
      (item, index) => categories.data[index].name
    );

  const createSubcategory = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        'https://shopping-api-7cy0.onrender.com/api/subcategories',
        {
          name,
          category: categoryId,
        }
      );
      toast.success('Subcategory added successfully');
      setLoading(false);
    } catch (error) {
      toast.error('Error Creating Subcategory');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={createSubcategory}
      className="m-7 text-2xl font-semibold flex flex-col gap-3 text-black dark:text-white animate-fadeup"
    >
      <Input
        title={'Subcategory Name'}
        placeholder={'Enter Subcategory Name...'}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Product Category</label>
      <Dropdown
        initTitle={'Select Category'}
        title={categorydropdown}
      />
      <CreateButton loading={loading} />
    </form>
  );
};

export default Subcategory;
