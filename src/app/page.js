"use client";

import Banner from "@/components/Banner";
import CategorySlider from "@/components/CategorySlider";
import HomeSlider from "@/components/HomeSlider";
import PopularProduct from "@/components/PopularProduct";

import CustomProduct from "@/components/shared/CustomProduct";
import useApi from "@/components/shared/useApi";

export default function Home() {
  const { data } = useApi("/latest.json");
  return (
    <main className="bg-[#f1f1f1] py-4">
      <HomeSlider />
      <CategorySlider />
      <PopularProduct />
      <Banner />
      <CustomProduct heading="Latest products" latestProduct={data} />
      <CustomProduct heading="Featured products" latestProduct={data} />
      <CustomProduct heading="Breakfast & Dairy" latestProduct={data} />
    </main>
  );
}
