import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { GoGift } from "react-icons/go";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const ServiceFooter = () => {
  return (
    <nav className="bg-[#fafafa] flex justify-between items-center px-10 py-4">
      <div className="text-center">
        <MdOutlineLocalShipping className="text-4xl mx-auto mb-4" />
        <h1 className="font-semibold">Free Shipping</h1>
        <p className="text-sm text-slate-600">For all orders over 500৳</p>
      </div>
      <div className="text-center">
        <PiKeyReturnLight className="text-4xl mx-auto mb-4" />
        <h1 className="font-semibold">30 Days Returns</h1>
        <p className="text-sm text-slate-600">For an Exchange product</p>
      </div>
      <div className="text-center">
        <BsWallet2 className="text-3xl mx-auto mb-4" />
        <h1 className="font-semibold">Secured Payment</h1>
        <p className="text-sm text-slate-600">Payment Cards Accepted</p>
      </div>
      <div className="text-center">
        <GoGift className="text-3xl mx-auto mb-4" />
        <h1 className="font-semibold">Special Gift</h1>
        <p className="text-sm text-slate-600">Our First Product Order</p>
      </div>
      <div className="text-center">
        <TfiHeadphoneAlt className="text-3xl mx-auto mb-4" />
        <h1 className="font-semibold">Support 24/7</h1>
        <p className="text-sm text-slate-600">Contact us Anytime</p>
      </div>
    </nav>
  );
};

export default ServiceFooter;
