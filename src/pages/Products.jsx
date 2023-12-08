import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

import { LoadingSpinner } from '../components/LoadingSpinner';
import ProductCard from '../components/ProductCard';

const Products = ({ buttons, searchResult }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [searchResult]);

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

  const deleteProduct = async (id) => {
    const isConfirm = await Swal.fire({
      title: 'Sure to Delete?',
      text: "You won't be able to undo this operation",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'yes, delete it',
    }).then((result) => {
      return result.isConfirmed;
    });

    if (!isConfirm) {
      return;
    }
    await axios
      .delete(`https://shopping-api-7cy0.onrender.com/api/products/${id}`)
      .then(({ data }) => {
        Swal.fire({
          icon: 'success',
          text: data.message,
        });
        fetchProducts();
      })
      .catch(({ response: { data } }) => {
        Swal.fire({
          text: 'Error :' + data.message,
          icon: 'error',
        });
      });
  };

  const loadedProducts = !searchResult
    ? products.data &&
      Object.values(products.data).map((product, index) => (
        <ProductCard
          buttons={buttons}
          deleteProduct={deleteProduct}
          key={products.data[index]._id}
          {...products.data[index]}
        />
      ))
    : searchResult &&
      products.data &&
      products.data.title &&
      Object.values(products.data)
        .filter((product, index) =>
          product.title.toString().toLowerCase().search(searchResult)
        )
        .map((product, index) => (
          <ProductCard
            buttons={buttons}
            {...products.data[index]}
            key={products.data[index]._id}
            deleteProduct={deleteProduct}
          />
        ));

  return (
    <div className="mx-5 px-5 grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 gap-8">
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

export default Products;
