import React from 'react';
import ImageUploader from '../components/ImageUploader';
import Input from '../components/Input';

const Category = () => {
  return (
    <div className="text-white ">
      <ImageUploader />
      <div className=" mt-10 text-2xl font-semibold">
        <Input
          title={'Category Name'}
          placeholder={'Enter Category Name...'}
          type={'text'}
        />
      </div>
    </div>
  );
};

export default Category;
