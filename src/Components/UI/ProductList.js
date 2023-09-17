import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ data }) {
  return (
    <>
      {data?.map((item,index) => (
        <ProductCard  key={index} item={item}/>
      ))}
    </>
  );
}

export default ProductList;
