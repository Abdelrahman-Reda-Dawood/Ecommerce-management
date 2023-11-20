import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { SpinnerCircularFixed } from 'spinners-react';

const ManageProduct = () => {
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://shopping-api-7cy0.onrender.com/api/products').then(
      (response) => {
        response.json().then((products) => {
          setProducts(products);
          console.log(products.data);
          setLoading(false);
        });
      }
    );
  }, []);

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
        <>
          {Object.values(products).map((product, index) => (
            <ProductCard
              // title={products.data[index].title}
              // price={products.data[index].price}
              // quantity={products.data[index].quantity}
              // imageCover={products.data[index].imageCover}
              // ratingsAverage={products.data[index].ratingsAverage}
              {...products.data[index]}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ManageProduct;
