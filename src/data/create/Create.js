import React from 'react';
import Input from '../../components/Input';

const Create = () => {
  return (
    <form className="flex flex-col justify-center relative font-semibold text-black dark:text-white  mt-5  gap-4 text-lg ">
      <Input
        title={'Product Name'}
        placeholder={'Enter product name...'}
      />
      <h3>Product Description</h3>
      <textarea
        required
        placeholder="Enter product description..."
        className="text-sm border w-[600px] xl:h-12 h-10 p-3 border-green-400 focus:border-white  pl-3 bg-neutral-100 dark:bg-neutral-600 rounded-lg"
      />

      <label>Product Price</label>
      <input
        type="text"
        className="w-3/4 bg-[#0e0e0ef8] border-2  text-white  "
        required
      />

      <label className="text-white">Product Price After Discount </label>
      <input
        className="w-3/4 bg-[#0e0e0ef8] border-2  text-white  "
        required
      ></input>

      <label className="text-white"> Product Category</label>
      <select className="w-3/4 bg-[#0e0e0ef8] border-2 text-white">
        <option
          value="mariro"
          className="text-white"
        >
          {' '}
          mario
        </option>
        <option
          value="johnny"
          className="text-white"
        >
          {' '}
          johnny
        </option>
      </select>

      <label className="text-white"> Product SubCategory</label>
      <select className="w-3/4 bg-[#0e0e0ef8] border-2 text-white">
        <option
          value="mariro"
          className="text-white"
        >
          {' '}
          mario
        </option>
        <option
          value="johnny"
          className="text-white"
        >
          {' '}
          johnny
        </option>
      </select>

      <label className="text-white"> Product Brand</label>
      <select className="w-3/4 bg-[#0e0e0ef8] border-2 text-white">
        <option
          value="mariro"
          className="text-white"
        >
          {' '}
          mario
        </option>
        <option
          value="johnny"
          className="text-white"
        >
          {' '}
          johnny
        </option>
      </select>

      <label className="text-white">Product Quantity </label>
      <input
        type="text"
        className="w-3/4 bg-[#0e0e0ef8] border-2  text-white  "
        required
      />
    </form>
  );
};

export default Create;
