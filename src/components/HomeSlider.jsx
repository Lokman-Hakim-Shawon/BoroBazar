import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import './styles.css';
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const HomeSlider = () => {
  return (
    <>
      <Swiper
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/slider1.png" width={1344} height={514} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slider1.png" width={1344} height={514} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slider1.png" width={1344} height={514} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slider1.png" width={1344} height={514} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slider1.png" width={1344} height={514} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slider1.png" width={1344} height={514} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slider1.png" width={1344} height={514} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slider1.png" width={1344} height={514} alt="slider1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
