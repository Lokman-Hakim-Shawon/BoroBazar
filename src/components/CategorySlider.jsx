import React from "react";
// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const CategorySlider = () => {
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
          <SwiperSlide className="">
            <Image
              src="/category1.png"
              width={66}
              height={66}
              alt="category"
              className="rounded-lg border-2 shadow-2xl"
            />
            <p className="text-slate-700 w-[76px] hover:text-primary hover:cursor-pointer">
              Fruits & Vegetables
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/category2.png"
              width={66}
              height={66}
              alt="category"
              className="rounded-lg border-2 shadow-2xl p-2"
            />
            <p className="text-slate-700 w-[76px] hover:text-primary hover:cursor-pointer">
              Meats & Seafood
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <Image
              src="/category3.png"
              width={66}
              height={66}
              alt="category"
              className="rounded-lg border-2 shadow-2xl p-2"
            />
            <p className="text-slate-700 w-[76px] hover:text-primary hover:cursor-pointer">
              Breakfast & Dairy
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/category4.png"
              width={66}
              height={66}
              alt="category"
              className="rounded-lg border-2 shadow-2xl p-2"
            />
            <p className="text-slate-700 w-[76px] hover:text-primary hover:cursor-pointer">
              Breads & Bakery
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/category5.png"
              width={66}
              height={66}
              alt="category"
              className="rounded-lg border-2 shadow-2xl p-2"
            />
            <p className="text-slate-700 w-[76px] hover:text-primary hover:cursor-pointer">
              Beverages
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/category6.png"
              width={66}
              height={66}
              alt="category"
              className="rounded-lg border-2 shadow-2xl p-2"
            />
            <p className="text-slate-700 w-[76px] hover:text-primary hover:cursor-pointer">
              Frozen Foods
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/category7.png"
              width={66}
              height={66}
              alt="category"
              className="rounded-lg border-2 shadow-2xl p-2"
            />
            <p className="text-slate-700 w-[76px] hover:text-primary hover:cursor-pointer">
              Biscuits & Snacks
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/category8.png"
              width={66}
              height={66}
              alt="category"
              className="rounded-lg border-2 shadow-2xl p-2"
            />
            <p className="text-slate-700 w-[76px] hover:text-primary hover:cursor-pointer">
              Grocery & Staples
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/category9.png"
              width={66}
              height={66}
              alt="category"
              className="rounded-lg border-2 shadow-2xl p-2"
            />
            <p className="text-slate-700 w-[76px] hover:text-primary hover:cursor-pointer">
              Baby & Pregnancy
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/category10.png"
              width={66}
              height={66}
              alt="category"
              className="rounded-lg border-2 shadow-2xl p-2"
            />
            <p className="text-slate-700 w-[76px] hover:text-primary hover:cursor-pointer">
              HealthCare
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
