import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { SpinnerCircularFixed } from 'spinners-react';
import Input from '../components/Input';

const AddCategory = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');

  const createCategory = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setLoading(true);
      await axios.post(
        'https://shopping-api-7cy0.onrender.com/api/categories',
        {
          name,
        }
      );
      toast.success('Category added successfully');
      setLoading(false);
    } catch (error) {
      toast.error('Error while adding category');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="m-7 text-2xl font-semibold flex flex-col gap-4 text-black dark:text-white"
      onSubmit={createCategory}
    >
      {/* <ImageUploader /> */}
      <Input
        title={'Category Name'}
        placeholder={'Enter Category Name...'}
        type={'text'}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        disabled={loading}
        size="lg"
        color="blue-gray"
        className="flex justify-center items-center my-5  w-[400px] h-10 xl:h-12  text-lg text-white bg-green-700 rounded-lg"
      >
        {loading ? (
          <SpinnerCircularFixed
            size={40}
            thickness={100}
            speed={120}
            color="#36ad47"
            secondaryColor="rgba(255, 255, 255, 0.9)"
          />
        ) : (
          'Create'
        )}
      </button>
    </form>
  );
};

export default AddCategory;
