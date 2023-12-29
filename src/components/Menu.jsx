import { useEffect, useRef, useState } from "react";
import { menuData } from "../Data/menuData";
import Flex from "./layout/Flex";
import List from "./layout/List";
import ListItems from "./layout/ListItems";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [show, setShow] = useState(false);
 

  const ref = useRef(null);
  
  
  useEffect(() => {
    const clickOutside = (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    document.addEventListener("click", clickOutside);
  });

  return (
    <Flex className="container justify-between py-7">
      <div>
        <img src="/assets/Logo.png" alt="logo" />
      </div>

      <div className="md:hidden z-20" ref={ref}>
        <HiOutlineMenu size={20} />
        {/* This div show before md */}
        <div
          className={`absolute ${
            show ? "w-1/2" : "w-0"
          }  top-0 right-0 h-screen transition-all
           bg-slate-400`}
        >
          {show && (
            <>
              <div>
                <Flex className=" justify-end p-5">
                  <AiOutlineClose
                    size={24}
                    color="#fff"
                    onClick={() => setShow(false)}
                  />
                </Flex>
                <Flex className=" justify-center">
                  <List className="flex  flex-col text-center text-md gap-5 font-bold text-white font-DM mt-[30%] ">
                    {menuData.map((item, i) => (
                      <ListItems
                        key={i}
                        className="hover:text-black cursor-pointer"
                      >
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "text-black" : ""
                          }
                          to={item.link}
                        >
                          {item.title}
                        </NavLink>
                      </ListItems>
                    ))}
                  </List>
                </Flex>
              </div>
            </>
          )}
        </div>
      </div>

      {/* This div show aftar md */}
      <div className="hidden md:block">
        <List className="flex box-border text-md gap-10  text-gray-500 font-DM ">
          {menuData.map((item, i) => (
            <ListItems key={i} className="hover:text-black cursor-pointer">
              <NavLink
                className={({ isActive }) => (isActive ? "text-black" : "")}
                to={item.link}
              >
                {item.title}
              </NavLink>
            </ListItems>
          ))}
        </List>
      </div>
    </Flex>
  );
};

export default Menu;
