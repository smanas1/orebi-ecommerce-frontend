import { IoClose } from "react-icons/io5";

import { useState } from "react";

const CartData = ({ title, price, link }) => {
  const [quantity, setQuantity] = useState(1);

  if (quantity === 0) {
    setQuantity(1);
  }
  return (
    <>
      <div className="flex items-center border-b gap-3">
        <div className="flex items-center w-[42%] lg:w-[40%] lg:gap-5 gap-2">
          <IoClose size={19} />

          <div className="">
            <img className="w-20 object-cover" src={link} alt="" />
          </div>
          <h2 className="font-bold ">{title}</h2>
        </div>
        <div className="w-[17%] ">
          <p className="lg:text-xl text-lg font-bold">{price}</p>
        </div>
        <div className="lg:w-[21%] w-[30%]">
          <form className=" -my-5 ">
            <label
              htmlFor="quantity-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <div className="relative flex items-center max-w-[8rem]">
              <button
                type="button"
                id="decrement-button"
                onClick={() => setQuantity(quantity - 1)}
                data-input-counter-decrement="quantity-input"
                className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
              >
                <svg
                  className="w-3 h-3 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h16"
                  />
                </svg>
              </button>
              <input
                type="text"
                id="quantity-input"
                data-input-counter
                data-input-counter-min="1"
                data-input-counter-max="50"
                aria-describedby="helper-text-explanation"
                className=" min-w-5 bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="999"
                value={quantity}
                required
              />
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                id="increment-button"
                data-input-counter-increment="quantity-input"
                className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
              >
                <svg
                  className="w-3 h-3 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div>
          <p className="lg:text-xl text-lg font-bold">$44.00</p>
        </div>
        <div className="hidden lg:block"></div>
      </div>
    </>
  );
};

export default CartData;
