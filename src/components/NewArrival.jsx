import Product from "./layout/Product";
import { newArrivalData } from "./../Data/productData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import "./style.css";

const NewArrival = () => {
  return (
    <>
      <div className="container">
        <h2 className="mt-32 font-DM font-bold mb-12 text-4xl">New Arrivals</h2>
        {/* <div className="flex justify-between gap-10">
          {newArrivalData.map((item, i) => (
            <div className="w-80 " key={i}>
              <Product
                img={item.img}
                title={item.title}
                price={item.price}
                status={item.status}
                color={item.color}
              />
            </div>
          ))}
        </div> */}

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 70,
            },
          }}
          style={{
            '--swiper-navigation-color': '#000',
            '--swiper-pagination-color': '#000',
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {newArrivalData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="w-80 " key={i}>
                <Product
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  status={item.status}
                  color={item.color}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default NewArrival;
