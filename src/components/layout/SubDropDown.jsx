import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const SubDropDown = ({ title, dropDown,  }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between py-5 border-b items-center"
      >
        <h2 className="text-base "> {title}</h2>
        <FaPlus  />
      </div>
      <div>
        {show &&
          dropDown.map((item, i) => {
            return (
              <div key={i} className="py-5 text-[#767676] border-b">
                <h3 className="text-base capitalize ms-6">{item.title}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SubDropDown;
