import { useEffect, useRef, useState } from "react";
import { dropdownData } from "../Data/menuData";
import Breadcrumb from "../components/layout/Breadcrumb";
import ItemSelect from "../components/layout/ItemSelect";
import PageSelect from "../components/layout/PageSelect";
import Pagination from "../components/layout/Pagination";
import LeftDropdown from "../components/layout/LeftDropdown";
import { colorData } from "../Data/colorData";
import { brandData } from "./../Data/BrandData";
import { IoFilter } from "react-icons/io5";
import { priceData } from "../Data/priceData";

const Shop = () => {
  const [value, setValue] = useState(12);
  const [leftShow, setLeftShow] = useState();

  const dropdownRef = useRef();

  useEffect(() => {
    const clickOutside = (e) => {
      if (dropdownRef.current.contains(e.target)) {
        setLeftShow(true);
      } else {
        setLeftShow(false);
      }
    };
    document.addEventListener("click", clickOutside);
  });
  return (
    <>
      <div className="container font-DM ">
        <Breadcrumb
          title="Product"
          path={window.location.pathname.split("/")[1].toUpperCase()}
        />
      </div>
      <div className="container relative  gap-10 flex max-sm:items-center max-sm:justify-center max-sm:text-center">
        <div className="w-1/4 hidden md:block">
          <LeftDropdown
            title="Shop by Category"
            subDropdown={false}
            data={dropdownData}
          />
          <LeftDropdown
            title="Shop by Color"
            subDropdown={true}
            data={colorData}
          />
          <LeftDropdown
            title="Shop by Brand"
            subDropdown={true}
            data={brandData}
          />
          <LeftDropdown
            title="Shop by Price"
            subDropdown={true}
            data={priceData}
          />
        </div>
        <div className="md:w-3/4 bg">
          <div className="flex justify-center items-center gap-10 pb-4 px-4">
            {/*  */}
            <div ref={dropdownRef}>
              <IoFilter className="md:hidden" size={24} />
              {/* This section for low device */}
              {leftShow && (
                <div className="lg:hidden absolute top-0 left-0 w-3/4 flex justify-center bg-white z-10">
                  <div className="w-3/4">
                    <LeftDropdown
                      title="Shop by Category"
                      subDropdown={false}
                      data={dropdownData}
                    />
                    <LeftDropdown
                      title="Shop by Color"
                      subDropdown={true}
                      data={colorData}
                    />
                    <LeftDropdown
                      title="Shop by Brand"
                      subDropdown={true}
                      data={brandData}
                    />
                    <LeftDropdown
                      title="Shop by Price"
                      subDropdown={true}
                      data={priceData}
                    />
                  </div>
                </div>
              )}
            </div>

            {
              <PageSelect
                title="Sort by:"
                select="Featured"
                mapItem={dropdownData}
              />
            }
            {<ItemSelect title="Show:" setValue={setValue} />}
          </div>
          <Pagination itemsPerPage={value} />
        </div>
      </div>
    </>
  );
};

export default Shop;
