import React from 'react';

const AddSupplier = () => {
  return (
    <div className="text-white  ">
      <form3 className="flex flex-col gap-2">
        <label
          className="text-white flex flex-row  ml-7"
          text-white
        >
        </label>
        <input
          type="text"
          className="w-3/4 bg-[#0e0e0ef8] border-2  text-white ml-7  "
          required
        />
        <label
          className="text-white ml-7"
          text-white
        >
        </label>
        <input
          type="text"
          className="w-3/4 bg-[#0e0e0ef8] border-2  text-white ml-7 "
          required
        />
        <label className="text-white ml-7"> Phone</label>
        <select className="w-3/4 bg-[#0e0e0ef8] border-2 text-white ml-7">
          <option
            value="mariro"
            className="text-white"
          >
            mario
          </option>
          <option
            value="johnny"
            className="text-white"
          >
            johnny
          </option>
        </select>
      </form3>
    </div>
  );
};

export default AddSupplier;
