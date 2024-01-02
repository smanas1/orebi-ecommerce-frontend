import Flex from "./Flex";
import { FaHeart,FaShoppingCart  } from "react-icons/fa";
import { ImSpinner11 } from "react-icons/im";

const Product = ({ img, title, price, status, color }) => {
  return (
    <>
      <div className="w-full relative font-DM group">
        <div className="relative overflow-hidden">
          <img src={img} alt="product image" />
          {/* Hover */}
          <div className="flex justify-end -bottom-1/2  py-5  pe-6 absolute transition-all group-hover:bottom-0 left-0 bg-white  w-full">
            <div>
              <Flex className="items-center gap-2 cursor-pointer text-right justify-end">
                <p className="text-[#6D6D6D] text-right">Add to Wish List</p>{" "}
                <FaHeart />
              </Flex>

              <Flex className="items-center cursor-pointer py-6 gap-2 justify-end">
                <p className="text-[#6D6D6D]">Compare</p>
                <ImSpinner11 />
              </Flex>
              <Flex className="items-center cursor-pointer gap-2 justify-end">
                <p className="text-[#6D6D6D]">Add to Cart</p>
                <FaShoppingCart/>
              </Flex>
            </div>
          </div>
        </div>
        <Flex className="justify-between items-center  pb-2 pt-6">
          <h3 className="font-bold text-xl text-primary">{title}</h3>{" "}
          <p className=" text-[#767676]"> ${price}</p>
        </Flex>
        <p className=" text-[#767676]">{color}</p>

        {/* Badge */}

        {status && (
          <div className="absolute top-5 left-5 px-8 py-2 text-sm bg-primary text-white">
            <p>{status}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
