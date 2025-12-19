"use client";

import Banner from "@/components/Banner";
import CategorySlider from "@/components/CategorySlider";
import Footer from "@/components/Footer";
import HomeSlider from "@/components/HomeSlider";
import PopularProduct from "@/components/PopularProduct";
import ServiceFooter from "@/components/ServiceFooter";
import CustomProduct from "@/components/shared/CustomProduct";
import useApi from "@/components/shared/useApi";
import axios from "axios";
import { useEffect, useState } from "react";

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
      <ServiceFooter />
      <Footer />
    </main>
  );
}
