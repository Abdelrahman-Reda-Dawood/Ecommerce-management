// import cardImage from '../assets/Image1.png';
import { Link } from 'react-router-dom';

const ProductCard = ({
  buttons = 'top',
  deleteProduct,
  _id,
  title,
  price,
  quantity,
  imageCover,
  description,
  ratingsAverage,
  priceAfterDiscount,
}) => {
  return (
    <div
      className="2xl:w-80  p-2 flex flex-col mx-2 bg-stone-100 dark:bg-neutral-700 text-black dark:text-white 
     rounded-3xl shadow-md transition duration-300 animate-fadeup"
    >
      {/* Edit - Delete Buttons */}
      {buttons === 'top' && (
        <div className="flex justify-between pt-2 px-1 font-semibold text-lg text-black dark:text-white ">
          <button>
            <p>Edit</p>
          </button>
          <button onClick={() => deleteProduct(_id)}>
            <p className="text-warning">Delete</p>
          </button>
        </div>
      )}

      {/* Product Image */}
      <div className="self-center">
        <Link>
          <img
            className="rounded-2xl h-40 w-48 "
            src={imageCover}
            alt={imageCover}
          />
        </Link>
      </div>
      <div className="px-3 pb-2">
        <div>
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
            {title}
          </h3>
        </div>
        {/* Stars */}
        <div className="flex justify-between mt-2.5 mb-5">
          <div className="flex">
            <svg
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className=" flex text-xs font-semibold items-center mr-2 px-2.5 py-0.5 rounded text-black bg-green-300 ml-3">
              {ratingsAverage}
            </span>
          </div>
          <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded text-black bg-pink-200  ml-3">
            {quantity} pcs
          </span>
        </div>

        <div className="flex items-center justify-evenly mt-5 ">
          <div className="flex flex-col items-center">
            {price && (
              <span className="text-xl line-through whitespace-nowrap flex-nowrap font-bold text-gray-500 dark:text-gray-400">
                {priceAfterDiscount ? '$' + price : <>&nbsp;</>}
              </span>
            )}
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${priceAfterDiscount ? priceAfterDiscount : price}
            </span>
          </div>

          {/* Cart Button */}
          {buttons === 'bottom' && (
            <button
              className="flex place-self-end group gap-2 py-2 px-4 text-white text-md
             font-semibold bg-green-500 rounded-lg shadow-md hover:shadow-lg whitespace-nowrap
            transition duration-500 transform-gpu hover:bg-primarygreen hover:scale-110"
            >
              Add to cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6  group-hover:animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
