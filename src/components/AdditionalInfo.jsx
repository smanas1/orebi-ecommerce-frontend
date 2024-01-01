import Flex from "./layout/Flex";
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck, FaUndo } from "react-icons/fa";
import { Link } from "react-router-dom";
const AdditionalInfo = () => {
  return (
    <>
      <div className=" my-3 py-3 border-t border-b md:my-7 md:py-6">  <Flex className="container justify-between font-DM">
          <Link>
            <Flex className="items-center">
            <PiNumberTwoBold className="text-lg sm:text-2xl" />
              <p className="text-[10px] text-[#6D6D6D] sm:text-base">
                Two years warranty
              </p>
            </Flex>
          </Link>
          <Link>
            <Flex className="items-center sm:text-2xl">
              <FaTruck className="me-1" />
              <p className="text-[10px] sm:text-base text-[#6D6D6D]">
                Free shipping
              </p>
            </Flex>
          </Link>
          <Link>
            <Flex className="items-center">
              <FaUndo className="me-1 sm:text-2xl" />
              <p className="text-[10px] sm:text-base text-[#6D6D6D]">
                Return policy in 30 days
              </p>
            </Flex>
          </Link>
        </Flex></div>
    </>
  );
};

export default AdditionalInfo;
