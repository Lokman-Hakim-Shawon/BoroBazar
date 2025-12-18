"use client";

import Banner from "@/components/Banner";
import CategorySlider from "@/components/CategorySlider";
import HomeSlider from "@/components/HomeSlider";
import PopularProduct from "@/components/PopularProduct";
import CustomProduct from "@/components/shared/CustomProduct";

export default function Home() {
  const latest_product_Array = [
    {
      image: "/latest1.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "250",
      previousPrice: "280",
    },
    {
      image: "/latest2.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "22",
      previousPrice: "30",
    },
    {
      image: "/latest3.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "32",
      previousPrice: "40",
    },
    {
      image: "/latest4.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "80",
      previousPrice: "100",
    },
    {
      image: "/latest5.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "50",
      previousPrice: "60",
    },
    {
      image: "/latest6.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "120",
      previousPrice: "150",
    },
    {
      image: "/latest1.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "250",
      previousPrice: "280",
    },
    {
      image: "/latest2.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "22",
      previousPrice: "30",
    },
    {
      image: "/latest3.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "32",
      previousPrice: "40",
    },
    {
      image: "/latest4.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "80",
      previousPrice: "100",
    },
    {
      image: "/latest5.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "50",
      previousPrice: "60",
    },
    {
      image: "/latest6.png",
      title: "100 Percent Apple Juice – 64 fl oz Bottle",
      currentPrice: "120",
      previousPrice: "150",
    },
  ];
  return (
    <main className="bg-[#f1f1f1] py-4">
      <HomeSlider />
      <CategorySlider />
      <PopularProduct />
      <Banner />
      <CustomProduct
        heading="Latest products"
        latestProduct={latest_product_Array}
      />
      this is home page
    </main>
  );
}
