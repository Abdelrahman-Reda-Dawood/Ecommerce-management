import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

import Input from '../components/Input';
import ImageUploader from '../components/ImageUploader';
import { useParams } from 'react-router-dom';
import CreateButton from '../components/CreateButton';

const AddBrand = () => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  // const [image, setImage] = useState('');

  const { image } = useParams;

  const createBrand = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setLoading(true);
      await axios.post(
        'https://shopping-api-7cy0.onrender.com/api/brands',
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
      <ImageUploader route={'api/brands'} />
      <div className="animate-fadeup">
        <Input
          title={'Brand Name'}
          placeholder={'Enter Brand Name'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <CreateButton loading={loading} />
      </div>
    </form>
  );
};

export default AddBrand;
