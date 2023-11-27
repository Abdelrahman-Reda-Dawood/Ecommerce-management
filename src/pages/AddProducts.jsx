import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { SpinnerCircularFixed } from 'spinners-react';
import Input from '../components/Input';
import ImageUploader from '../components/ImageUploader';

const AddProducts = () => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [describtion, setDescribtion] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(
        'https://shopping-api-7cy0.onrender.com/api/categories'
      );
      setCategories(data);
    };

    const fetchSubCategories = async () => {
      const { data } = await axios.get(
        'https://shopping-api-7cy0.onrender.com/api/subcategories'
      );
      setSubCategories(data);
    };

    const fetchBrands = async () => {
      const { data } = await axios.get(
        'https://shopping-api-7cy0.onrender.com/api/brands'
      );
      setBrands(data);
    };

    fetchCategories();
    fetchSubCategories();
    fetchBrands();
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

  const subcategoriesOptions =
    subCategories.data &&
    Object.values(subCategories.data).map((item, index) => (
      <option
        key={index}
        value={subCategories.data[index]._id}
      >
        {subCategories.data[index].name}
      </option>
    ));

  const brandsOptions =
    brands.data &&
    Object.values(brands.data).map((item, index) => (
      <option
        key={index}
        value={brands.data[index]._id}
      >
        {brands.data[index].name}
      </option>
    ));

  const createProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setLoading(true);
      await axios.post(
        'https://shopping-api-7cy0.onrender.com/api/products',
        {
          title: name,
          price,
          describtion,
        }
      );
      toast.success('Product added successfully');
      setLoading(false);
    } catch (error) {
      toast.error('Error while adding product');
    }
  };

  return (
    <form
      onSubmit={createProduct}
      className="mx-5 text-2xl font-semibold flex flex-col gap-4 text-black dark:text-white"
    >
      <ImageUploader />

      <div className="flex 2xl:flex-row justify-evenly sm:flex-col">
        <div className="flex flex-col gap-6">
          <Input
            title={'Product Name'}
            placeholder={'Enter Product Name'}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            title={'Product Description'}
            placeholder={'Enter Product description'}
            value={describtion}
            onChange={(e) => setDescribtion(e.target.value)}
          />
          <Input
            title={'Product Price'}
            placeholder={'Enter Product price'}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label>Product Category</label>
          <select className="text-[16px] border w-[400px] xl:h-12 h-10 border-green-400 focus:border-white pl-3 bg-neutral-100 dark:bg-neutral-600 text-black dark:text-white rounded-lg">
            <option
              disabled
              selected
              className="font-bold text-black"
            >
              Please select a category
            </option>
            {categoriesOptions}
          </select>

          <label>Product SubCategory</label>
          <select className="text-[16px] border w-[400px] xl:h-12 h-10 border-green-400 focus:border-white pl-3 bg-neutral-100 dark:bg-neutral-600 text-black dark:text-white rounded-lg">
            <option
              disabled
              selected
              className="font-bold text-black"
            >
              Please select a subcategory
            </option>
            {subcategoriesOptions}
          </select>

          <label>Product Brand</label>
          <select className="text-[16px] border w-[400px] xl:h-12 h-10 border-green-400 focus:border-white pl-3 bg-neutral-100 dark:bg-neutral-600 text-black dark:text-white rounded-lg">
            <option
              disabled
              selected
              className="font-bold text-black"
            >
              Please select a brand
            </option>
            {brandsOptions}
          </select>
        </div>
      </div>

      <button
        disabled={loading}
        size="lg"
        color="blue-gray"
        className="flex justify-center items-center self-center my-5 w-[400px] h-10 xl:h-12 text-lg text-white bg-green-700 rounded-lg"
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

export default AddProducts;
