import Breadcrumb from "../components/layout/Breadcrumb";
import Pagination from "../components/layout/Pagination";

const Shop = () => {
  return (
    <>
      <div className="container font-DM ">
        <Breadcrumb
          title="Product"
          path={window.location.pathname.split("/")[1].toUpperCase()}
        />
      </div>
      <div className="container flex">
      <div className="w-1/4 bg-green-400">sfsefs</div>
      <div className="w-3/4 bg">
        <Pagination itemsPerPage={12} />
      </div>
      </div>
    </>
  );
};

export default Shop;
