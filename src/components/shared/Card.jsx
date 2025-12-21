import React from "react";
import Image from "next/image";

const Card = ({ image, title, currentPrice, previousPrice }) => {
  return (
    <div className="shadow-lg px-4 group bg-white py-4 rounded-lg">
      <Image
        src={image}
        alt="image"
        width={199}
        height={172}
        className="transition group-hover:scale-110"
      />
      <h1 className="font-semibold text-sm group-hover:text-primary py-2">
        {title}
      </h1>
      <div className="flex justify-between items-center py-2">
        <p className="text-red-500 font-bold">{currentPrice} ৳</p>
        <del className="text-slate-500">{previousPrice} ৳</del>
      </div>
      <button className=" text-primary border border-primary rounded-lg py-2 px-8 w-full font-semibold">
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
