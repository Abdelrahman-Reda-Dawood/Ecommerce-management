import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import CreateButton from '../components/CreateButton';
import ImageUploader from '../components/ImageUploader';
import Input from '../components/Input';
import { fetch } from '../utils/fetch';

const baseURL = process.env.REACT_APP_BASE_URL;

const AddProducts = () => {
  const [loading, setLoading] = useState(false);

  const [uploaded, setUploaded] = useState(false);

  const [sell, setSell] = useState('');
  const [buy, setBuy] = useState('');
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

  const [stores, setStores] = useState([]);
  const [storeId, setStoreId] = useState('');

  const [suppliers, setSuppliers] = useState([]);
  const [supplierId, setSupplierId] = useState('');

  function handleImageCallback(childData) {
    setImageCover(childData);
  }

  useEffect(() => {
    toast.dismiss();
    fetch({ routeName: 'brands', setData: setBrands });
    fetch({ routeName: 'stores', setData: setStores });
    fetch({ routeName: 'supplier', setData: setSuppliers });
    fetch({ routeName: 'categories', setData: setCategories });
    fetch({
      loading: true,
      routeName: 'subcategories',
      setData: setSubCategories,
    });
  }, []);

  const categories_Options =
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

  const subcategories_Options =
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

  const brands_Options =
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

  const stores_Options =
    stores &&
    Object.values(stores).map((item, index) => (
      <option
        className="font-semibold "
        key={index}
        value={stores[index]._id}
      >
        {stores[index].name}
      </option>
    ));

  const suppliers_Options =
    suppliers.data &&
    Object.values(suppliers.data).map((item, index) => (
      <option
        className="font-semibold "
        key={index}
        value={suppliers.data[index]._id}
      >
        {suppliers.data[index].name}
      </option>
    ));

  const createProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setLoading(true);
      await axios.post(
        baseURL
          ? `${baseURL}/api/products`
          : 'https://shopping-api-7cy0.onrender.com/api/products',
        setUploaded(true),
        {
          buy,
          sell,
          title,
          price,
          quantity,
          imageCover,
          description,
          storeID: storeId,
          supplierId,
          brand: brandId,
          category: categoryId,
          subCategories: subCategoryId,
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
      <ImageUploader
        uploaded={uploaded}
        handleImageCallback={handleImageCallback}
        routeName={'products'}
      />

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
            type={'number'}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            title={'Quantity'}
            placeholder={'Enter a number...'}
            type={'number'}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Input
            title={'Buy'}
            placeholder={'Enter a number...'}
            type={'number'}
            value={buy}
            onChange={(e) => setBuy(e.target.value)}
          />
          <Input
            title={'Sell'}
            placeholder={'Enter a number...'}
            type={'number'}
            value={sell}
            onChange={(e) => setSell(e.target.value)}
          />
          <h3 className="mb-1 xl:mb-2 text-black dark:text-white">
            Product Description
          </h3>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description..."
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
            {categories_Options}
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
            {subcategories_Options}
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
            {brands_Options}
          </select>

          <label className="mb-1 xl:mb-2 text-black dark:text-white">
            Product Supplier
          </label>
          <select
            onChange={(e) => setSupplierId(e.target.value)}
            className="2xl:w-[400px] lg:w-[300px] md:w-[300px] xl:h-12 h-10 text-[16px] border border-green-400 focus:border-white pl-3 bg-neutral-100 dark:bg-neutral-600 text-black dark:text-white rounded-lg"
          >
            <option
              disabled
              selected
              className="font-bold text-black"
            >
              Select Supplier
            </option>
            {suppliers_Options}
          </select>

          <label className="mb-1 xl:mb-2 text-black dark:text-white">
            Product Store
          </label>
          <select
            onChange={(e) => setStoreId(e.target.value)}
            className="2xl:w-[400px] lg:w-[300px] md:w-[300px] xl:h-12 h-10 text-[16px] border border-green-400 focus:border-white pl-3 bg-neutral-100 dark:bg-neutral-600 text-black dark:text-white rounded-lg"
          >
            <option
              disabled
              selected
              className="font-bold text-black"
            >
              Select Store
            </option>
            {stores_Options}
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
