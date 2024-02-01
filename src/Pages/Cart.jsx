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

      <div className="bg-[#F5F5F3] font-bold flex justify-between p-8 border-b border-[#F5F7F7]">
        <h3 className="w-1/4">Product</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Total</h3>
        <h3 className="hidden xl:block"></h3>
      </div>
      {/* Cart */}
      <div className="border  p-5">
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
    </div>
  );
};

export default Cart;
