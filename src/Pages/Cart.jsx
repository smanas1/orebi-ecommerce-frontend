import { cartData } from "../Data/cartData";
import CartData from "../components/CartData";
import Breadcrumb from "../components/layout/Breadcrumb";

const Cart = () => {
  return (
    <div className="container font-DM">
      <Breadcrumb
        title="Cart"
        path={window.location.pathname.split("/")[1].toUpperCase()}
      />

      {/* Cart Top Bar */}

      <div className="bg-[#F5F5F3] font-bold flex text-lg justify-between p-8 border-b border-[#F5F7F7]">
        <h3 className="w-1/4">Product</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Total</h3>
        <h3 className="hidden xl:block"></h3>
      </div>
      {/* Cart */}
      <div className="border  border-b-0">
        {/* Cart Data Map */}
        {cartData.map((item, i) => (
          <CartData
            key={i}
            title={item.title}
            price={item.price}
            link={item.link}
          />
        ))}
      </div>
      <div className="flex border border-t-0 justify-between px-6 items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pe-16 my-6"
            >
              <option defaultValue>SIZE</option>
              <option value="US">SM</option>
              <option value="CA">MD</option>
              <option value="FR">LG</option>
              <option value="DE">XL</option>
            </select>
          </div>
          <h3 className="ms-6 font-bold text-lg">Apply coupon</h3>
        </div>
        <h3 className="ms-6 font-bold text-lg">Update cart</h3>
      </div>
      <div className="flex justify-end">
        <div className="flex flex-col  mt-10 mb-5">
          <div className="flex justify-end mb-5">
            <p className="lg:text-xl text-lg font-bold ">Cart Total</p>
          </div>
          <div className="flex items-center border">
            <div
              className="py-2 ps-3 pe-10 sm:pe-52 text-lg 
            
            border-r font-bold "
            >
              Subtotal
            </div>
            <div className="sm:py-[11px] pe-10 sm:pe-52 ps-3 ">1000$</div>
          </div>
          <div className="flex items-center border border-t-0">
            <div className=" pe-[72px] py-2 ps-3 sm:pe-60 text-lg border-r font-bold ">
              Total
            </div>
            <div className="sm:py-[11px] pe-10 sm:pe-52 ps-3 ">1000$</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
