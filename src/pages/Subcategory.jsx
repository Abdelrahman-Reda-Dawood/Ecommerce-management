import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Input from '../components/Input';
import { SpinnerCircularFixed } from 'spinners-react';

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
      className="m-7 text-2xl font-semibold flex flex-col gap-4 text-black dark:text-white"
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
        className="text-[16px] border w-[400px] xl:h-12 h-10 border-green-400 focus:border-white pl-3 bg-neutral-100 dark:bg-neutral-600 text-black dark:text-white rounded-lg"
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

      <button
        disabled={loading}
        color="blue-gray"
        className="flex justify-center items-center my-5 w-[400px] h-10 xl:h-12 text-lg text-white bg-green-700 rounded-lg"
      >
        {loading ? (
          <SpinnerCircularFixed
            size={40}
            thickness={100}
            speed={120}
            color="#36ad47"
            secondaryColor="rgba(255, 255, 255, 0.9)"
          />
        ) : (
          'Create'
        )}
      </button>
    </form>
  );
};

export default Subcategory;
