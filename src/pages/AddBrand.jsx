import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

import Input from '../components/Input';
import ImageUploader from '../components/ImageUploader';
import CreateButton from '../components/CreateButton';

const baseURL = process.env.REACT_APP_BASE_URL;

const AddBrand = () => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [uploaded, setUploaded] = useState(false);
  const [image, setImage] = useState('');

  function handleImageCallback(childData) {
    setImage(childData);
  }

  const createBrand = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setLoading(true);
      await axios.post(
        baseURL
          ? `${baseURL}/api/brands`
          : `https://shopping-api-7cy0.onrender.com/api/brands`,
        setUploaded(true),
        {
          name,
          image,
        }
      );
      toast.success('Brand added successfully');
      setLoading(false);
    } catch (error) {
      toast.error('Error while adding brand');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={createBrand}
      className="mx-5 text-2xl font-semibold flex flex-col gap-4 text-black dark:text-white"
    >
      <ImageUploader
        routeName={'/brands'}
        uploaded={uploaded}
        handleImageCallback={handleImageCallback}
      />
      <div className="animate-fadeup">
        <Input
          title={'Brand Name'}
          placeholder={'Enter Brand Name'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <CreateButton loading={loading} />
      </div>
      <a href="https://shopping-api-7cy0.onrender.com//products/https://www.the-sun.com/wp-content/uploads/sites/6/2022/09/iphone-15-op.jpg?strip=all&quality=100&w=1920&h=1080&crop=1"></a>
    </form>
  );
};

export default AddBrand;
