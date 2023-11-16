import React from 'react';

const Subcategory = () => {
  return (
    <div className="text-white ">
      <form2 className="flex flex-col gap-2">
        <label className="text-white flex flex-row  ml-7">
          Category Name
        </label>
        <input
          type="text"
          className=" flex flex-row w-3/4 bg-[#0e0e0ef8] border-2 text-white ml-7 "
          required
        />

        <label className="text-white ml-7"> Product Category</label>
        <select className="w-3/4 bg-[#0e0e0ef8] border-2 text-white ml-7">
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
      </form2>
    </div>
  );
};

export default Subcategory;
