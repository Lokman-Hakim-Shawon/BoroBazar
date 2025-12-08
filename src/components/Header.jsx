import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "./Search";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-3 border-b-2 px-8 ">
      {/* logo section */}
      <div>
        <Link href="/">
          <Image src={"/logo.png"} width={227} height={54} alt="logo" />
        </Link>
      </div>
      {/* search section */}
      <Search />
      {/* login and registration section */}fsd
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <Link href={"/login"} className="hover:text-primary">
            Login
          </Link>
          <span className="">|</span>
          <Link href={"/registration"} className="hover:text-primary">
            Registration
          </Link>
        </div>
      </div>
      {/* addTocart and Wishlist section */}
      <div className="flex items-center gap-8">
        {/* Wishlist */}
        <Link href={"/wishlist"} className="relative flex ">
          <span className="text-white bg-[#DC2626] w-6 h-6 rounded-full absolute flex items-center justify-center -top-[10px] -right-[15] z-50">
            3
          </span>
          <FaRegHeart size={25} className="text-gray-700 hover:text-primary" />
        </Link>

        {/* Add to Cart */}
        <Link href={"/cart"} className="relative flex ">
          <span className="text-white bg-[#DC2626] w-6 h-6 rounded-full absolute flex items-center justify-center -top-[10px] -right-[15] z-50">
            3
          </span>
          <IoBagOutline
            size={25}
            className="text-gray-700 hover:text-primary"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
