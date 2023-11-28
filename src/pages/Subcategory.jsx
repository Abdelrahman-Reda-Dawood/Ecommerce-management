import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Input from '../components/Input';
import CreateButton from '../components/CreateButton';

const Subcategory = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(
        'https://shopping-api-7cy0.onrender.com/api/categories'
      );
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const categoriesOptions =
    categories.data &&
    Object.values(categories.data).map((item, index) => (
      <option
        className="font-semibold"
        key={index}
        value={categories.data[index]._id}
      >
        {categories.data[index].name}
      </option>
    ));

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
      toast.success('Category added successfully');
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
      className="m-7 text-2xl font-semibold flex flex-col gap-4 text-black dark:text-white animate-fadeup"
    >
      <Input
        title={'Subcategory Name'}
        placeholder={'Enter Subcategory Name...'}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Product Category</label>
      <select
        onChange={(e) => setCategoryId(e.target.value)}
        className="2xl:w-[400px] lg:w-[300px] md:w-[300px] xl:h-12 h-10 text-[16px] border border-green-400 focus:border-white pl-3 bg-neutral-100 dark:bg-neutral-600 text-black dark:text-white rounded-lg"
      >
        <option
          disabled
          selected
          className="font-bold text-black"
        >
          Please select a category
        </option>
        {categoriesOptions}
      </select>

      <CreateButton loading={loading} />
    </form>
  );
};

export default Subcategory;
