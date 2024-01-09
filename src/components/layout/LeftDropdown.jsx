import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import DropdownItems from "./DropdownItems";
import SubDropDown from "./SubDropDown";
import DropColor from "./DropColor";
const LeftDropdown = ({ title, subDropdown, data }) => {
  const [drop] = useState(subDropdown);
  const [show, setShow] = useState(true);

  return (
    <div className="mb-10">
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="flex mb-4 justify-between cursor-pointer items-center"
        >
          <h1 className="font-DM font-bold transition-all text-xl">{title}</h1>
          {show ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
        </div>
      ) : (
        <div className="flex mb-4 justify-between cursor-pointer items-center">
          <h1 className="font-DM font-bold text-xl">{title}</h1>
        </div>
      )}
      <div
        className={`${
          show ? "block transition-all" : "hidden transition-all"
        } `}
      >
        <ul className="font-DM">
          {data.map((item, i) => {
            if (item.subMenu) {
              return (
                <SubDropDown
                  key={i}
                  dropDown={item.subMenu}
                  title={item.title}
                />
              );
            }
            if (item.color) {
              return (
                <DropColor
                  key={i}
                  color={item.color}
                  title={item.title}
                />
              );
            }
            return (
              <DropdownItems
                key={i}
                dropDown={item.dropDown}
                title={item.title}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftDropdown;
