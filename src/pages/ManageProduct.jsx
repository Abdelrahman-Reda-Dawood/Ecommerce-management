import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { SpinnerCircularFixed } from 'spinners-react';

const ManageProduct = () => {
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([]);
  try {
    useEffect(() => {
      setLoading(true);
      fetch('https://shopping-app-vdmq.onrender.com/api/products').then(
        (response) => {
          response.json().then((products) => {
            setProducts(products);
          });
        }
      );
      setLoading(true);
    }, []);
  } catch (err) {
    setLoading(true);
  }
  return (
    <div className="ml-5 px-5 grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 gap-3">
      {loading ? (
        <div className=' col-span-5 place-self-center'>
          <SpinnerCircularFixed
            size={80}
            thickness={100}
            speed={120}
            color="#36ad47"
            secondaryColor="rgba(255, 255, 255, 0.5)"
          />
        </div>
      ) : (
        <>
          {products.map((product) => (
            <ProductCard {...product} />
          ))}
        </>
      )}
    </div>
  );
};

export default ManageProduct;
