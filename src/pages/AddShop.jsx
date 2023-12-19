import axios from 'axios';
import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';

import Input from '../components/Input';
import CreateButton from '../components/CreateButton';

const AddShop = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDiscription] = useState('');
  const [storeId, setStoreId] = useState('');

  useEffect(() => {
    toast.dismiss();

    const fetchStores = async () => {
      const stores = await axios.get(
        'https://shopping-api-7cy0.onrender.com/api/stores'
      );
      setStores(stores);
    };
    fetchStores();
  }, []);

  const storeIdOptions =
    stores.data &&
    Object.values(stores.data).map((item, index) => (
      <option
        key={index}
        value={stores.data[index]._id}
      >
        {stores.data[index].name}
      </option>
    ));

  const createShop = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setLoading(true);
      await axios.post(
        'https://shopping-api-7cy0.onrender.com/api/branch/create',
        {
          name,
          description,
          address,
          storeId,
        }
      );
      toast.success('Shop added successfully');
      setLoading(false);
    } catch (error) {
      toast.error('Error while creating shop!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={createShop}>
      <div
        className="flex justify-between 2xl:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col 
       m-7 text-2xl font-semibold gap-4 text-black dark:text-white"
      >
        <div className="flex flex-col gap-4 animate-fadedown">
          <Input
            title={'Shop Name'}
            placeholder={'Enter shop name...'}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            title={'Shop Address'}
            placeholder={'Enter shop address...'}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <h3>Shop Description</h3>
          <textarea
            required
            value={description}
            onChange={(e) => setDiscription(e.target.value)}
            placeholder="Enter shop description..."
            className="text-sm border 2xl:w-[400px] lg:w-[300px] md:w-[300px] h-12 py-3 border-green-400 focus:border-white pl-3 bg-neutral-100 dark:bg-neutral-600 rounded-lg"
          />
          <label className="mb-0">Store ID</label>
          <select
            onChange={(e) => setStoreId(e.target.value)}
            className="text-[16px] border xl:h-12 h-10 border-green-400 focus:border-white pl-3 bg-neutral-100 dark:bg-neutral-600 text-black dark:text-white rounded-lg"
          >
            <option
              disabled
              selected
              className="font-bold text-black"
            >
              Please select a store
            </option>
            {storeIdOptions}
          </select>
        </div>
        {/* Map */}
        <div className="animate-zoomin">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221097.85825042907!2d31.34702779419993!3d30.018088901626985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145822cffcd270e7%3A0x98b73d687889fd8!2sNew%20Cairo%20City%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1664962315076!5m2!1sen!2seg"
            title="Location"
            // allowfullscreen=""
            loading="lazy"
            className="h-full 2xl:w-[750px] lg:w-[450px] p-2 mt-7 shadow-sm shadow-green-400 bg-slate-100"
          ></iframe>
        </div>
      </div>
      <div className="ml-7">
        <CreateButton loading={loading} />
      </div>
    </form>
  );
};

export default AddShop;
