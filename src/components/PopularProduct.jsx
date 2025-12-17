import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper/modules";
import Card from "./shared/Card";

const PopularProduct = () => {
  // tabs code
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // swiper array
  const swiperArray = [
    {
      image: "/popular1.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "250",
      previousPrice: "280",
    },
    {
      image: "/popular2.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "22",
      previousPrice: "30",
    },
    {
      image: "/popular3.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "32",
      previousPrice: "40",
    },
    {
      image: "/popular4.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "80",
      previousPrice: "100",
    },
    {
      image: "/popular5.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "50",
      previousPrice: "60",
    },
    {
      image: "/popular6.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "120",
      previousPrice: "150",
    },
    {
      image: "/popular1.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "250",
      previousPrice: "280",
    },
    {
      image: "/popular2.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "22",
      previousPrice: "30",
    },
    {
      image: "/popular3.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "32",
      previousPrice: "40",
    },
    {
      image: "/popular4.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "80",
      previousPrice: "100",
    },
    {
      image: "/popular5.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "50",
      previousPrice: "60",
    },
    {
      image: "/popular6.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "120",
      previousPrice: "150",
    },
  ];

  return (
    <div className="bg-[white] px-8">
      <div className="">
        <div className=" flex justify-between items-center">
          <div className="">
            <h1 className="">Popular Product</h1>
            <h4 className="text-xs text-slate-500">
              Do not miss the current offers
            </h4>
          </div>
          <div className="">
            <Box
              sx={{
                maxWidth: { xs: 320, sm: 780 },
                bgcolor: "background.paper",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Breads & Bakery" />
                <Tab label="Breakfast & Dairy" />
                <Tab label="Meats & Seafood" />
                <Tab label="Fruits & Vegetables" />
                <Tab label="Biscuits & Snacks" />
                <Tab label="Beverages" />
                <Tab label="Frozen Foods" />
                <Tab label="Grocery & Staples" />
                <Tab label="Baby & Pregnancy" />
                <Tab label="Healthcare" />
              </Tabs>
            </Box>
          </div>
        </div>
        <div className="py-8">
          <Swiper
            slidesPerView={6}
            spaceBetween={20}
            modules={[Pagination]}
            className="mySwiper"
          >
            {swiperArray.map((data, index) => (
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
    </div>
  );
};

export default PopularProduct;
