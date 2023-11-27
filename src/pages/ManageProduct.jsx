import React, { useEffect, useState } from 'react';
import { SpinnerCircularFixed } from 'spinners-react';
import toast from 'react-hot-toast';

import ProductCard from '../components/ProductCard';

const ManageProduct = () => {
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    try {
      const fetchProducts = async () => {
        await fetch(
          'https://shopping-api-7cy0.onrender.com/api/products'
        ).then((response) => {
          response.json().then((products) => {
            setProducts(products);
            console.log(products.data);
            setLoading(false);
          });
        });
      };
      fetchProducts();
    } catch (error) {
      toast.error('error while getting products');
    }
  }, []);

  const loadedProducts = Object.values(products).map((product, index) => (
    <ProductCard {...products.data[index]} />
  ));

  return (
    <div className="m-5 px-5 grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 gap-3">
      {loading ? (
        <div className=" col-span-5 place-self-center">
          <SpinnerCircularFixed
            size={80}
            thickness={100}
            speed={120}
            color="#36ad47"
            secondaryColor="rgba(255, 255, 255, 0.5)"
          />
        </div>
      ) : (
        <>{loadedProducts}</>
      )}
    </div>
  );
};

export default ManageProduct;
