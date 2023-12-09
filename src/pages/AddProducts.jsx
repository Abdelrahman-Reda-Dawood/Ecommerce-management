import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import Input from '../components/Input';
import ImageUploader from '../components/ImageUploader';
import CreateButton from '../components/CreateButton';

const baseURL = process.env.REACT_APP_BASE_URL;

const AddProducts = () => {
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [imageCover, setImageCover] = useState('');
  const [description, setDescription] = useState('');

  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');

  const [subCategories, setSubCategories] = useState([]);
  const [subCategoryId, setSubCategoryId] = useState('');

  const [brands, setBrands] = useState([]);
  const [brandId, setBrandId] = useState('');

  function handleImageCallback(childData) {
    setImageCover(childData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        baseURL
          ? `${baseURL}/api/categories`
          : `https://shopping-api-7cy0.onrender.com/api/categories`
      );
      setCategories(data);
    } catch (e) {
      toast.error('Error while loading categories');
    }

    try {
      const { data } = await axios.get(
        'https://shopping-api-7cy0.onrender.com/api/subcategories'
      );
      setSubCategories(data);
    } catch (e) {
      toast.error('Error while loading subcategories');
    }

    try {
      const { data } = await axios.get(
        'https://shopping-api-7cy0.onrender.com/api/brands'
      );
      setBrands(data);
    } catch (e) {
      toast.error('Error while loading Brands');
    }
  };

  const categoriesOptions =
    categories.data &&
    Object.values(categories.data).map((item, index) => (
      <option
        className="font-semibold "
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
        className="font-semibold "
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
        className="font-semibold "
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
          title,
          imageCover,
          price,
          description,
          category: categoryId,
          subCategories: subCategoryId,
          brand: brandId,
        }
      );
      toast.success('Product added successfully');
      setLoading(false);
    } catch (error) {
      toast.error('Error while adding product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={createProduct}
      className="mx-5 text-2xl font-semibold flex flex-col gap-4 text-black dark:text-white"
    >
      <ImageUploader handleImageCallback={handleImageCallback} />

      <div className="flex 2xl:flex-row justify-evenly sm:flex-col animate-fadeup">
        {/* Inputs */}
        <div className="flex flex-col">
          <Input
            title={'Product Name'}
            placeholder={'Product Name...'}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            title={'Product Price'}
            placeholder={'Product price...'}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            title={'Quantity'}
            placeholder={'Enter a number...'}
            type={'number'}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <h3 className="mb-1 xl:mb-2 text-black dark:text-white">
            Shop Description
          </h3>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Shop description..."
            className="text-sm border 2xl:w-[400px] lg:w-[300px] md:w-[300px] h-12 p-3 border-green-400 focus:border-white  pl-3 bg-neutral-100 dark:bg-neutral-600 rounded-lg"
          />
        </div>
        {/* Drop Downs */}
        <div className="flex flex-col">
          <label className="mb-1 xl:mb-2 text-black dark:text-white">
            Product Category
          </label>
          <select
            onChange={(e) => setCategoryId(e.target.value)}
            className="2xl:w-[400px] lg:w-[300px] md:w-[300px] xl:h-12 h-10 text-[16px] border border-green-400 focus:border-white pl-3 bg-neutral-100 dark:bg-neutral-600 text-black dark:text-white rounded-lg"
          >
            <option
              disabled
              selected
              className="font-bold text-black"
            >
              Select Category
            </option>
            {categoriesOptions}
          </select>

          <label className="mb-1 xl:mb-2 text-black dark:text-white">
            Product SubCategory
          </label>
          <select
            onChange={(e) => setSubCategoryId(e.target.value)}
            className="2xl:w-[400px] lg:w-[300px] md:w-[300px] xl:h-12 h-10 text-[16px] border border-green-400 focus:border-white pl-3 bg-neutral-100 dark:bg-neutral-600 text-black dark:text-white rounded-lg"
          >
            <option
              disabled
              selected
              className="font-bold text-black"
            >
              Select Subcategory
            </option>
            {subcategoriesOptions}
          </select>

          <label className="mb-1 xl:mb-2 text-black dark:text-white">
            Product Brand
          </label>
          <select
            onChange={(e) => setBrandId(e.target.value)}
            className="2xl:w-[400px] lg:w-[300px] md:w-[300px] xl:h-12 h-10 text-[16px] border border-green-400 focus:border-white pl-3 bg-neutral-100 dark:bg-neutral-600 text-black dark:text-white rounded-lg"
          >
            <option
              disabled
              selected
              className="font-bold text-black"
            >
              Select Brand
            </option>
            {brandsOptions}
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <CreateButton loading={loading} />
      </div>
    </form>
  );
};

export default AddProducts;
