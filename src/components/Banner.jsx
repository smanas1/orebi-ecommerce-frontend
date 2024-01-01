import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { bannerData } from "../Data/bannerData";
import { Link } from "react-router-dom";
import { useState } from "react";

const Banner = () => {
  const [dot, setDot] = useState(0);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplaySpeed: 10000,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setDot(next);
    },
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "10px",

                left: "2%",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dot
                  ? {
                      width: "30px",
                      height: "20px",
                      color: "black",
                      borderRight: "2px black solid",
                    }
                  : {
                      width: "30px",
                      height: "40px",
                      color: "white",
                      borderRight: "2px white solid",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "30%",

          left: "8%",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dot
            ? {
                width: "30px",
                height: "40px",
                color: "black",
                borderRight: "2px black solid",
              }
            : {
                width: "30px",
                height: "40px",
                color: "white",
                borderRight: "3px white solid",
              }
        }
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <div className="">
      <Slider {...settings}>
        {bannerData.map((item, i) => (
          <Link key={i}>
            <div>
              <img src={item.img} alt="banner Image" />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
