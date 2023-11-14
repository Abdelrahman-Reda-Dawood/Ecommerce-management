import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  try {
    useEffect(() => {
      fetch('https://shopping-app-vdmq.onrender.com/api/products').then(
        (response) => {
          response.json().then((products) => {
            setProducts(products);
          });
        }
      );
    }, []);
  } catch (err) {
    throw err;
  }

  return (
    <div className="ml-5 px-5 grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 gap-3">
      {products.map((product) => (
        <ProductCard {...product} />
      ))}
    </div>
  );
};

export default ManageProduct;
