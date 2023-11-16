import React from 'react';
import Uploader from '../components/ImageUploader';

const AddBrand = () => {
  return (
    <div className="text-white ">
      <Uploader />
      <label className="text-white flex flex-row  ml-7">Brand Name</label>
      <input
        type="text"
        className=" flex flex-row w-3/4 bg-[#0e0e0ef8] border-2 text-white ml-7 "
        required
      />
    </div>
  );
};

export default AddBrand;
