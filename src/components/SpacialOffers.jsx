import Product from "./layout/Product";
import { newArrivalData } from "./../Data/productData";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import "../Style/style.css";

const SpacialOffers = () => {
  return (
    <>
      <div className="container pb-10 md:pb-20">
        <h2 className="mt-10 md:mt-32  font-DM font-bold mb-12 text-4xl">
          Spacial Offers
        </h2>

        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4  gap-10">
          {newArrivalData.map((item, i) => (
            <div className="w-full " key={i}>
              <Product
                img={item.img}
                title={item.title}
                price={item.price}
                status={item.status}
                color={item.color}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SpacialOffers;
