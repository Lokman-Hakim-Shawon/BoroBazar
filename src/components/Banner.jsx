import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="px-8 my-4 bg-white py-4">
      <Image src="/banner.png" alt="banner-image" width={1296} height={421} />
    </div>
  );
};

export default Banner;
