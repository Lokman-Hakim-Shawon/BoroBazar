import Sidebar from "@/components/products/Sidebar";
import React from "react";

const ProductPage = () => {
  return (
    <section className="sticky py-5 bg-white">
      <div className="flex w-full gap-4">
        <div className="w-[25%] max-h-[100%]">
          <Sidebar />
        </div>
        <div className="w-[75%] bg-gray-300 h-[1000px]">right side</div>
      </div>
    </section>
  );
};

export default ProductPage;
