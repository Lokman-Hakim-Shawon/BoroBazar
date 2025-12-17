"use client";

import CategorySlider from "@/components/CategorySlider";
import HomeSlider from "@/components/HomeSlider";
import PopularProduct from "@/components/PopularProduct";

export default function Home() {
  return (
    <main className="bg-[#f1f1f1] py-4">
      <HomeSlider />
      <CategorySlider />
      <PopularProduct />
      this is home page
    </main>
  );
}
