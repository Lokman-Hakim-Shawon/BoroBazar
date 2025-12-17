import React from "react";
// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const CategorySlider = () => {
  const slideData = [
    { image: "/category1.png", title: "Fegetruits & Vables" },
    { image: "/category2.png", title: "Meats & Seafood" },
    { image: "/category3.png", title: "Breakfast & Dairy" },
    { image: "/category4.png", title: "Breads & Bakery" },
    { image: "/category5.png", title: "Beverage" },
    { image: "/category6.png", title: "Frozen Foods" },
    { image: "/category7.png", title: "Biscuits & Snacks" },
    { image: "/category8.png", title: "Grocery & Staples" },
    { image: "/category9.png", title: "Baby & Pregnancy" },
    { image: "/category10.png", title: "Health Care" },
  ];
  return (
    <div className="py-4 my-4 border-2 px-8 w-full">
      <div className="  w-full">
        <Swiper
          slidesPerView={10}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full"
        >
          {slideData.map((data, index) => (
            <SwiperSlide key={index} className="group hover:cursor-pointer">
              <Image
                src={data.image}
                width={100}
                height={100}
                alt="category"
                className="rounded-lg border-2 shadow-2xl p-6 transition group-hover:scale-105"
              />
              <p className="text-xs text-slate-700 group-hover:text-primary  ">
                {data.title}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
