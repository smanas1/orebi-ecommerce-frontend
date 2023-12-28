import Dropdown from "./layout/Dropdown";
import Flex from "./layout/Flex";
import { BiMenuAltLeft } from "react-icons/bi";
import List from "./layout/List";
import { dropdownData } from "../Data/menuData";
import ListItems from "./layout/ListItems";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const clickOutside = (e) => {
      if (dropdownRef.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    document.addEventListener("click", clickOutside);
  });
  const dropdownRef = useRef(null);

  return (
    <>
      <div className="bg-[#F5F5F3]">
        <Flex className="container justify-between items-center ">
          <div ref={dropdownRef}>
            <Dropdown>
              <Flex className="cursor-pointer">
                <BiMenuAltLeft size={25} />
                <div>
                  <span className="hidden md:inline">Shop by </span>Category
                </div>
              </Flex>
              {show && (
                <List className="absolute">
                  {dropdownData.map((item, i) => (
                    <ListItems
                      key={i}
                      className="bg-[#262626] p-4
                    border-b border-[#2D2D2D] hover:px-7 transition-all group w-64"
                    >
                      <NavLink
                        to={item.link}
                        className={`${({ isActive }) =>
                          isActive
                            ? "text-black"
                            : ""} font-DM group-hover:text-white text-[#D8D8D8]`}
                      >
                        {item.title}
                      </NavLink>
                    </ListItems>
                  ))}
                </List>
              )}
            </Dropdown>
          </div>
          <div className="w-[40%] py-5 relative">
            {/* This is aftar md input */}
            <input
              placeholder="Search Products"
              className="hidden md:block w-full font-DM py-4 px-3"
              type="text"
            />

            <input
              placeholder="Search"
              className="md:hidden w-full font-DM py-3 px-2"
              type="text"
            />

            <FaSearch className="absolute top-8 right-3 md:top-9 md:right-5" size={20} />
          </div>
          <div>Right</div>
        </Flex>
      </div>
    </>
  );
};

export default Header;
