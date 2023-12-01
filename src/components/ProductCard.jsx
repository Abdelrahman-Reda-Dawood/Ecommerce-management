// import cardImage from '../assets/Image1.png';
import ImageCard from './ImageCard';

const bgcolor = 'bg-neutral-300 dark:bg-[#343434]';
const width = '2xl:w-[330px] lg:w-[260px] md:w-[160px]';
const height = 'h-[315px]';
const zindex = 'z-10';

const ProductCard = ({
  buttons = true,
  title,
  imageCover,
  quantity,
  ratingsAverage,
  price,
}) => {
  return (
    <ImageCard
      imgsrc={imageCover}
      bgcolor={bgcolor}
      width={width}
      height={height}
      zindex={zindex}
    >
      {/* Edit - Delete */}
      {buttons && (
        <div className="flex justify-between font-semibold text-lg text-black dark:text-white ">
          <button className="z-20">
            <p>Edit</p>
          </button>
          <button className="z-20">
            <p className="text-warning">Delete</p>
          </button>
        </div>
      )}
      {/* Heart Icon */}
      <div className="absolute flex justify-center bottom-24 right-4 bg-neutral-400 dark:bg-neutral-500  h-8 w-8 rounded-full">
        <button className="z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
      {/* Bot info */}
      <div className="absolute flex justify-between bottom-5 p-3 w-[90%] h-16 rounded-2xl text-black dark:text-white bg-neutral-400 dark:bg-neutral-500 z-10">
        <>
          {title}
          <div className="flex text-sm flex-nowrap">
            <p>
              <span className="font-bold"> {quantity}</span>&nbsp;Sales
              .&nbsp;
            </p>
            <p>
              <span className="font-bold"> {ratingsAverage}</span>
              &nbsp;Ratings
            </p>
          </div>
        </>
        <div className="flex flex-nowrap">
          <div className="w-[1px] h-auto bg-white dark:bg-neutral-900 mr-1" />
          <p className="text-lg font-semibold self-center">${price}</p>
        </div>
      </div>
    </ImageCard>
  );
};

export default ProductCard;
