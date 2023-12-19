import axios from 'axios';
import toast from 'react-hot-toast';

export const fetch = async ({ routeName, setData, loading = false }) => {
  const toastLoading = loading && toast.loading('loading');

  try {
    const { data } = await axios.get(
      `https://shopping-api-7cy0.onrender.com/api/${routeName}`
    );
    setData(data);
    loading && toast.success('Loaded successfully');
  } catch {
    loading && toast.error('Error while Loading');
  } finally {
    toast.dismiss(toastLoading);
  }
};
