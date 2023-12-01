import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Input from '../components/Input';
import CreateButton from '../components/CreateButton';

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
      className="m-7 text-2xl font-semibold flex flex-col gap-4 text-black dark:text-white animate-fadeup"
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
      <CreateButton loading={loading} />
    </form>
  );
};

export default AddCategory;
