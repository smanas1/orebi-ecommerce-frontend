import { useState } from "react";
import { dropdownData } from "../Data/menuData";
import Breadcrumb from "../components/layout/Breadcrumb";
import ItemSelect from "../components/layout/ItemSelect";
import PageSelect from "../components/layout/PageSelect";
import Pagination from "../components/layout/Pagination";

const Shop = () => {
  const [value, setValue] = useState(12);
  return (
    <>
      <div className="container font-DM ">
        <Breadcrumb
          title="Product"
          path={window.location.pathname.split("/")[1].toUpperCase()}
        />
      </div>
      <div className="container flex max-sm:items-center max-sm:justify-center max-sm:text-center">
        <div className="w-1/4 hidden   sm:block bg-green-400">sfsefs</div>
        <div className="md:w-3/4 bg">
          <div className="flex justify-center sm:justify-end gap-10 pb-4 px-4">
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
