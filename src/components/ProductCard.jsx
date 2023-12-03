// import cardImage from '../assets/Image1.png';
import { Link } from 'react-router-dom';

// const bgcolor = 'bg-neutral-300 dark:bg-[#343434]';
// const width = '2xl:w-[330px] lg:w-[260px] md:w-[160px]';
// const height = 'h-[315px]';
// const zindex = 'z-10';

const ProductCard = ({
  cartButton = false,
  editButton = true,
  title,
  imageCover,
  description,
  quantity,
  ratingsAverage,
  price,
  priceAfterDiscount,
}) => {
  return (
    // <ImageCard
    //   imgsrc={imageCover}
    //   bgcolor={bgcolor}
    //   width={width}
    //   height={height}
    //   zindex={zindex}
    // >
    //   {/* Edit - Delete */}
    //   {buttons && (
    //     <div className="flex justify-between font-semibold text-lg text-black dark:text-white ">
    //       <button className="z-20">
    //         <p>Edit</p>
    //       </button>
    //       <button className="z-20">
    //         <p className="text-warning">Delete</p>
    //       </button>
    //     </div>
    //   )}
    //   {/* Heart Icon */}
    //   <div className="absolute flex justify-center bottom-24 right-4 bg-neutral-400 dark:bg-neutral-500  h-8 w-8 rounded-full">
    //     <button className="z-20">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth={1.5}
    //         stroke="currentColor"
    //         className="w-6 h-6"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    //         />
    //       </svg>
    //     </button>
    //   </div>
    //   {/* Bot info */}
    //   <div className="absolute flex justify-between bottom-5 p-3 w-[90%] h-16 rounded-2xl text-black dark:text-white bg-neutral-400 dark:bg-neutral-500 z-10">
    //     <>
    //       {title}
    //       <div className="flex text-sm flex-nowrap">
    //         <p>
    //           <span className="font-bold"> {quantity}</span>&nbsp;Sales
    //           .&nbsp;
    //         </p>
    //         <p>
    //           <span className="font-bold"> {ratingsAverage}</span>
    //           &nbsp;Ratings
    //         </p>
    //       </div>
    //     </>
    //     <div className="flex flex-nowrap">
    //       <div className="w-[1px] h-auto bg-white dark:bg-neutral-900 mr-1" />
    //       <p className="text-lg font-semibold ">${price}</p>
    //     </div>
    //   </div>
    // </ImageCard>
    <div
      class="2xl:w-80  p-2 flex flex-col mx-2 bg-neutral-300 dark:bg-darkbg text-black dark:text-white 
     rounded-3xl shadow-md transition duration-300 animate-fadeup"
    >
      {/* Edit - Delete Buttons */}
      {editButton && (
        <div className="flex justify-between pt-2 px-1 font-semibold text-lg text-black dark:text-white ">
          <button>
            <p>Edit</p>
          </button>
          <button>
            <p className="text-warning">Delete</p>
          </button>
        </div>
      )}

      {/* Product Image */}
      <div className="self-center">
        <Link>
          <img
            class="rounded-xl h-40 w-48 "
            src={imageCover}
            alt={imageCover}
          />
        </Link>
      </div>
      <div class="px-3 pb-2">
        <div>
          <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
            {title}
          </h3>
        </div>
        {/* Stars */}
        <div class="flex justify-between mt-2.5 mb-5">
          <div className="flex">
            <svg
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded text-black bg-green-300 ml-3">
              {ratingsAverage}
            </span>
          </div>
          <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded text-black bg-pink-200  ml-3">
            {quantity} pcs
          </span>
        </div>

        <div class="flex items-start justify-evenly mt-5 ">
          <div className="flex flex-col items-center">
            {priceAfterDiscount && (
              <span class="text-2xl line-through font-bold text-gray-500 dark:text-gray-400">
                ${priceAfterDiscount ? price : ''}
              </span>
            )}
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              ${priceAfterDiscount ? priceAfterDiscount : price}
            </span>
          </div>

          {cartButton && (
            <button className="flex gap-2 text-white text-md font-semibold bg-green-500 py-2 px-4 rounded-lg shadow-md hover:shadow-lg whitespace-nowrap transition duration-500 transform-gpu hover:bg-primarygreen hover:scale-110 group">
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
