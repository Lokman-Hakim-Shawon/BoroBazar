"use client";
import Card from "../shared/Card";
import useApi from "../shared/useApi";

const ProductSection = () => {
  const { data } = useApi("/latest.json");
  console.log(data);
  return <div className="grid grid-cols-5 py-4 mx-2 gap-2">
    {data.map((data, index) => <Card key={index} image={data.image} title={data.title} currentPrice={data.currentPrice} previousPrice={data.previousPrice} />)}
  </div>;
};

export default ProductSection;
