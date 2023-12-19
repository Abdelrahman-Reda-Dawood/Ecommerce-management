import React, { useState } from 'react';

function CheckoutCard({ CheckoutCardProps }) {
  const [checkout, setCheckout] = useState(true);
  return (
    <>
      {checkout && (
        <div className="px-4 sm:px-6 lg:px-8 animate-fadeup">
          <div className="flex flex-col justify-center min-h-fit 2xl:max-w-sm lg:max-w-xs md:max-w-md px-4 py-6 sm:px-8 sm:py-10 bg-stone-100 dark:bg-neutral-700 text-black dark:text-white shadow-xl rounded-3xl">
            {/* Product Details */}
            <ul className="-my-10">
              <li className="flex flex-col space-y-3 py-4 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div className="shrink-0 relative">
                  <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                    1
                  </span>
                  <img
                    className="h-24 w-24 max-w-full rounded-lg object-cover"
                    src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60"
                    alt=""
                  />
                </div>

                <div className="relative flex flex-1 flex-col justify-between">
                  <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div className="pr-8 sm:pr-5">
                      <p className="text-base font-semibold ">
                        Nike Air Max 2019
                      </p>
                      <p className="mx-0 mt-1 mb-0 text-sm ">36EU - 4US</p>
                    </div>

                    <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p className="shrink-0 w-20 text-base font-semibold sm:order-2 sm:ml-8 sm:text-right">
                        $1259.00
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button className="flex rounded p-2 text-center  transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
              <li className="flex flex-col space-y-3 py-4 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div className="shrink-0 relative">
                  <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                    1
                  </span>
                  <img
                    className="h-24 w-24 max-w-full rounded-lg object-cover"
                    src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60"
                    alt=""
                  />
                </div>

                <div className="relative flex flex-1 flex-col justify-between">
                  <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div className="pr-8 sm:pr-5">
                      <p className="text-base font-semibold ">
                        Nike Air Max 2019
                      </p>
                      <p className="mx-0 mt-1 mb-0 text-sm ">36EU - 4US</p>
                    </div>

                    <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p className="shrink-0 w-20 text-base font-semibold sm:order-2 sm:ml-8 sm:text-right">
                        $1259.00
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button className="flex rounded p-2 text-center  transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
              <li className="flex flex-col space-y-3 py-4 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div className="shrink-0 relative">
                  <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                    1
                  </span>
                  <img
                    className="h-24 w-24 max-w-full rounded-lg object-cover"
                    src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60"
                    alt=""
                  />
                </div>

                <div className="relative flex flex-1 flex-col justify-between">
                  <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div className="pr-8 sm:pr-5">
                      <p className="text-base font-semibold ">
                        Nike Air Max 2019
                      </p>
                      <p className="mx-0 mt-1 mb-0 text-sm ">36EU - 4US</p>
                    </div>

                    <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p className="shrink-0 w-20 text-base font-semibold sm:order-2 sm:ml-8 sm:text-right">
                        $1259.00
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button className="flex rounded p-2 text-center  transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
              <li className="flex flex-col space-y-3 py-4 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div className="shrink-0 relative">
                  <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                    1
                  </span>
                  <img
                    className="h-24 w-24 max-w-full rounded-lg object-cover"
                    src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60"
                    alt=""
                  />
                </div>

                <div className="relative flex flex-1 flex-col justify-between">
                  <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div className="pr-8 sm:pr-5">
                      <p className="text-base font-semibold ">
                        Nike Air Max 2019
                      </p>
                      <p className="mx-0 mt-1 mb-0 text-sm ">36EU - 4US</p>
                    </div>

                    <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p className="shrink-0 w-20 text-base font-semibold sm:order-2 sm:ml-8 sm:text-right">
                        $1259.00
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button className="flex rounded p-2 text-center  transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
              <li className="flex flex-col space-y-3 py-4 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div className="shrink-0 relative">
                  <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                    1
                  </span>
                  <img
                    className="h-24 w-24 max-w-full rounded-lg object-cover"
                    src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60"
                    alt=""
                  />
                </div>

                <div className="relative flex flex-1 flex-col justify-between">
                  <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div className="pr-8 sm:pr-5">
                      <p className="text-base font-semibold ">
                        Nike Air Max 2019
                      </p>
                      <p className="mx-0 mt-1 mb-0 text-sm ">36EU - 4US</p>
                    </div>

                    <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p className="shrink-0 w-20 text-base font-semibold sm:order-2 sm:ml-8 sm:text-right">
                        $1259.00
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button className="flex rounded p-2 text-center  transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            </ul>

            {/* <hr className="mx-0 mt-6 mb-0 h-0 border-r-0 border-b-0 border-l-0 border-t border-solid border-gray-300" /> */}
            <div className="mt-8 space-y-3 border-t border-b py-8">
              <div className="flex items-center justify-between">
                <p>Subtotal</p>
                <p className="text-lg font-semibold ">$2399.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Shipping</p>
                <p className="text-lg font-semibold ">$8.00</p>
              </div>
            </div>

            <div>
              {/* Total Price*/}
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium ">Total</p>
                <p className="text-2xl font-semibold ">$ 2499.00</p>
              </div>

              {/* Bot Button */}
              <div className="mt-6 flex text-center">
                <button className="group flex w-full items-center justify-center  rounded-md bg-green-500 px-6 py-4 text-lg font-semibold text-white focus:shadow hover:bg-primarygreen">
                  Place Order
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:ml-8 ml-2 h-6 w-6 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CheckoutCard;
