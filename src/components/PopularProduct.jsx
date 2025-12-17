import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const PopularProduct = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-[white] px-8">
      <div className="">
        <div className=" flex justify-between items-center">
          <div className="">
            <h1 className="">Popular Product</h1>
            <h4 className="text-xs text-slate-500">
              Do not miss the current offers
            </h4>
          </div>
          <div className="">
            <Box
              sx={{
                maxWidth: { xs: 320, sm: 780 },
                bgcolor: "background.paper",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Breads & Bakery" />
                <Tab label="Breakfast & Dairy" />
                <Tab label="Meats & Seafood" />
                <Tab label="Fruits & Vegetables" />
                <Tab label="Biscuits & Snacks" />
                <Tab label="Beverages" />
                <Tab label="Frozen Foods" />
                <Tab label="Grocery & Staples" />
                <Tab label="Baby & Pregnancy" />
                <Tab label="Healthcare" />
              </Tabs>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
