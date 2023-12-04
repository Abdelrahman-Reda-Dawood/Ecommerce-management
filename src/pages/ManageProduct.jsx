import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { LoadingSpinner } from '../components/LoadingSpinner';
import ProductCard from '../components/ProductCard';

const ManageProduct = ({ buttons }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const toastLoading = toast.loading('loading');
      try {
        const { data } = await axios.get(
          'https://shopping-api-7cy0.onrender.com/api/products'
        );
        setProducts(data);
        toast.success('Products loaded successfully');
      } catch {
        toast.error('Error while Loading products');
      } finally {
        toast.dismiss(toastLoading);
      }
    };
    fetchProducts();
  }, []);

  const loadedProducts =
    products.data &&
    Object.values(products.data).map((product, index) => (
      <ProductCard
        buttons={buttons}
        key={products.data[index]._id}
        {...products.data[index]}
      />
    ));

  return (
    <div className="m-5 px-5 grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 gap-8">
      {loadedProducts ? (
        <>{loadedProducts}</>
      ) : (
        <div className="col-span-5 place-self-center mt-40">
          <LoadingSpinner size={'80'} />
        </div>
      )}
    </div>
  );
};

export default ManageProduct;
