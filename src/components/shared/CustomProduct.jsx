import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper/modules";
const CustomProduct = ({ heading, latestProduct }) => {
  return (
    <div className="bg-white py-8">
      <h1 className="text-2xl font-semibold py-4 px-8">{heading}</h1>
      <div className="">
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          modules={[Pagination]}
          className="mySwiper"
        >
          {latestProduct.map((data, index) => (
            <SwiperSlide key={index}>
              <Card
                image={data.image}
                title={data.title}
                currentPrice={data.currentPrice}
                previousPrice={data.previousPrice}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomProduct;
