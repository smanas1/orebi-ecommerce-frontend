import Flex from "./layout/Flex";
import { menuData } from "./../Data/menuData";
import List from "./layout/List";
import ListItems from "./layout/ListItems";
import { Link } from "react-router-dom";
import { shopData } from "../Data/shopData";
import { helpData } from "../Data/helpData";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#F5F5F3] py-14 font-DM">
        <div className="grid container max-sm:text-center max-sm:flex max-sm:flex-col max-sm:items-center grid-cols-1 sm:grid-cols-3 md:grid-cols-5 justify-between">
          {/* This is Menu Part */}
          <Flex>
            <div>
              <h3 className="text-base  font-bold text-primary">MENU </h3>
              <List className="mt-4">
                {menuData.map((item, i) => (
                  <Link key={i}>
                    <ListItems className="text-[#6D6D6D] my-1">
                      {item.title}
                    </ListItems>
                  </Link>
                ))}
              </List>
            </div>
          </Flex>
          {/* This is shop part */}
          <Flex>
            <div>
              <h3 className="text-base  font-bold text-primary">SHOP </h3>
              <List className="mt-4">
                {shopData.map((item, i) => (
                  <Link key={i}>
                    <ListItems className="text-[#6D6D6D] my-1">
                      {item.title}
                    </ListItems>
                  </Link>
                ))}
              </List>
            </div>
          </Flex>
          {/* This is Help part */}
          <Flex>
            <div>
              <h3 className="text-base  font-bold text-primary">HELP </h3>
              <List className="mt-4">
                {helpData.map((item, i) => (
                  <Link key={i}>
                    <ListItems className="text-[#6D6D6D] my-1">
                      {item.title}
                    </ListItems>
                  </Link>
                ))}
              </List>
            </div>
          </Flex>
          {/* This is Address part */}
          <Flex>
            <div className="cursor-pointer mt-6 md:mt-0">
              <h3
                className="text-base 
             font-bold text-primary"
              >
                (052) 611-5711{" "}
              </h3>
              <h3
                className="text-base 
             font-bold text-primary"
              >
                {" "}
                company@domain.com
              </h3>

              <p className="text-[#6D6D6D] my-1">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </Flex>
          {/* This is logo part */}
          <Flex className='mt-6 md:mt-0'>
            <picture>
              <img src="/assets/Logo.png" alt="footer logo image" />
            </picture>
          </Flex>
        </div>
        {/* This is footer bottom part */}
        <div className="container flex flex-col sm:flex-row  sm:justify-between  max-sm:items-center mt-16">
          <Flex className='gap-4 '>
            <FaFacebookF size={15}/> <FaLinkedinIn size={16}/> <FaInstagram size={16}/>
          </Flex>
          <Link to='https://github.com/smanas1/orebi-ecommerce-frontend'>
          <p className="text-[#6D6D6D] max-sm:mt-3">2024 Orebi Minimal eCommerce Design by Anas</p></Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
