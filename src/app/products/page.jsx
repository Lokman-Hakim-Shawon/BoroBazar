import ProductSection from "@/components/products/ProductSection";
import Sidebar from "@/components/products/Sidebar";
import React from "react";

const ProductPage = () => {
  return (
    <section className="sticky py-2 bg-white">
      <div className="flex w-full">
        <div className="w-[20%] max-h-[100%]">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-gray-300 h-[1000px] overflow-scroll">
          <ProductSection />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
