import React from 'react';

function Checkout() {
  return (
    <div className="flex justify-end px-4 sm:px-6 lg:px-8 font-sans">
      <div className="mt-8 max-w-sm md:mt-12">
        <div className="items-end justify-end justify-self-end justify-items-end bg-neutral-300 text-black dark:bg-darkbg dark:text-white rounded-3xl shadow-lg">
          <div className="px-4 py-6 sm:px-8 sm:py-10">
            <div className="">
              <ul className="-my-8">
                <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
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

                  <div class="relative flex flex-1 flex-col justify-between">
                    <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                      <div class="pr-8 sm:pr-5">
                        <p class="text-base font-semibold ">
                          Nike Air Max 2019
                        </p>
                        <p class="mx-0 mt-1 mb-0 text-sm ">36EU - 4US</p>
                      </div>

                      <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                        <p class="shrink-0 w-20 text-base font-semibold sm:order-2 sm:ml-8 sm:text-right">
                          $1259.00
                        </p>
                      </div>
                    </div>

                    <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                      <button
                        type="button"
                        class="flex rounded p-2 text-center  transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                      >
                        <svg
                          class="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                            class=""
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* <hr class="mx-0 mt-6 mb-0 h-0 border-r-0 border-b-0 border-l-0 border-t border-solid border-gray-300" /> */}
            <div class="mt-6 space-y-3 border-t border-b py-8">
              <div class="flex items-center justify-between">
                <p>Subtotal</p>
                <p class="text-lg font-semibold ">$2399.00</p>
              </div>
              <div class="flex items-center justify-between">
                <p>Shipping</p>
                <p class="text-lg font-semibold ">$8.00</p>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-between">
              <p class="text-sm font-medium ">Total</p>
              <p class="text-2xl font-semibold ">$ 2499.00</p>
            </div>

            <div class="mt-6 text-center">
              <button
                type="button"
                class="group inline-flex w-full items-center justify-center rounded-md bg-green-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-primarygreen"
              >
                Place Order
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="group-hover:ml-8 ml-2 h-6 w-6 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
