import Dropdown from "./layout/Dropdown";
import Flex from "./layout/Flex";
import { BiMenuAltLeft } from "react-icons/bi";
import List from "./layout/List";
import { dropdownData } from "../Data/menuData";
import ListItems from "./layout/ListItems";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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
                <h3>Shop by Category</h3>
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
          <div>Mid</div>
          <div>Right</div>
        </Flex>
      </div>
    </>
  );
};

export default Header;
