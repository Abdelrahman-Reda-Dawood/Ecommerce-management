import React from 'react';
import Input from '../../components/Input';

const Create = () => {
  return (
    <form className=" flex flex-col justify-center mt-5  gap-2 text-lg ">
      <Input title={'product Name'}
      placeholder={"Enter product name..."}
      />
      <label
        className="text-white"
        text-white
      >
        Product Description
      </label>
      <input
        type="text"
        className=" w-3/4 bg-[#0e0e0ef8] border-2   text-white "
        required
      />

      <label
        className="text-white"
        text-white
      >
        Product Price
      </label>
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
