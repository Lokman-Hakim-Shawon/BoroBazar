"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Sidebar = () => {
  return (
    <aside className="sticky top-[150px]">
      <div className="">
        <div className="flex items-center justify-between px-4">
          <h3 className="text-[16px] font-[600] text-gray-700">
            Shop By Category
          </h3>
          <Button className="!min-w-[35px] !w-[35px] h-[35px]  !rounded-full !text-gray-800 hover:bg-gray-200">
            <IoIosArrowDown size={20} className="text-gray-800" />
          </Button>
        </div>
        <FormGroup className="pl-12">
          <FormControlLabel
            control={<Checkbox />}
            label="Fruits & Vegetables"
          />
          <FormControlLabel control={<Checkbox />} label="Meats & Seafood" />
          <FormControlLabel control={<Checkbox />} label="Breakfast & Dairy" />
          <FormControlLabel control={<Checkbox />} label="Breads & Bakery" />
          <FormControlLabel control={<Checkbox />} label="Beverage" />
          <FormControlLabel control={<Checkbox />} label="Frozen Foods" />
          <FormControlLabel control={<Checkbox />} label="Biscuits & Snacks" />
          <FormControlLabel control={<Checkbox />} label="Grocery & Staple" />
        </FormGroup>
      </div>
    </aside>
  );
};

export default Sidebar;
