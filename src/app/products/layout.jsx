import Sidebar from "@/components/products/Sidebar";
import React from "react";
export const metadata = {
  title: "Products",
  description: "boro bazar all products",
};
const layout = ({ children }) => {
  return <section className="sticky py-2 bg-white">
    <div className="flex w-full">
      <div className="w-[20%] max-h-[100%]">
        <Sidebar />
      </div>
      <div className="w-[80%] bg-gray-300 h-[1000px] overflow-scroll custom-scroll">
        {children}
      </div>
    </div>
  </section>
};

export default layout;
