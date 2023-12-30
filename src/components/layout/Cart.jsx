import { cartData } from "../../Data/cartData";
import { IoClose } from "react-icons/io5";
import Flex from "./Flex";
import { useEffect, useState } from "react";
const Cart = () => {
  return (
    <>
      <div className="absolute right-32">
        {cartData.map((item, i) => (
          <div
            key={i}
            className="flex p-5 gap-2 font-DM font-bold items-center bg-[#F5F5F3]"
          >
            <img width={80} src={item.link} alt="cart" />

            <div>
              <h4 className="">{item.title}</h4>

              <p className="mt-1">${item.price}</p>
            </div>
            <IoClose size={25} className="mx-3 cursor-pointer" />
          </div>
        ))}
        <div className="bg-white p-4 drop-shadow-md font-DM box-border">
          <p>
            Subtotal: <span className="font-bold">$44.00</span>
          </p>
          <Flex className="justify-evenly">
            <div className="py-4">
              <Flex className="gap-5">
                <button className="py-3 px-8 border-2 hover:bg-black hover:text-white border-black font-bold">
                  View Cart
                </button>
                <button className="py-3 px-8 border-2 hover:bg-black hover:text-white border-black font-bold">
                  Checkout
                </button>
              </Flex>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Cart;
