import React from 'react';
import Create from '../data/create/Create';
import Uploader from '../components/ImageUploader';

const AddProducts = () => {
  return (
    <div>
      <div className="text-white">
        <Uploader />
        <Create />
      </div>
    </div>
  );
};

export default AddProducts;
