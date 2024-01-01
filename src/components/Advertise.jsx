import { advertise } from "../Data/advertiseData";
import Flex from "./layout/Flex";

const Advertise = () => {
  return (
    <div className="container mt-10 md:mt-24">
     
        <Flex className='md:gap-10 gap-5'>
          <div className="w-2/4">
            <img src='/assets/ad1.png' alt="advertise image" />
          </div>
          <div className="w-2/4">
            <img src='/assets/Ad_2.png' alt="advertise image" />
            <img className="md:mt-10 mt-2" src='/assets/Ad_3.png' alt="advertise image" />
          </div>
        </Flex>
      
    </div>
  );
};

export default Advertise;
