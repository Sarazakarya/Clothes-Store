import React from "react";
import ProductSectionItem from "./ProductSectionItem";
import { storeData } from "../../assets/data/dummyData";

export default function ProductSection() {
  return (
    <div>
      <div className="bg-black p-2 w-[50%] mx-auto rounded-md">
        <h2 className="text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SUMMER T-Shirt SALE 30%
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 justify-items-center py-8 mx-auto max-w-7lg md:grid-cols-2 sm:grid-cols-1">
        {storeData.slice(0, 6).map((product, index) => {
          return (
            <div key={index}>
              <ProductSectionItem
                id={product.id}
                name={product.name}
                img={product.img}
                text={product.text}
                price={product.price}
                totalPrice={product.totalPrice}
                color={product.color}
                size={product.size}
              ></ProductSectionItem>
            </div>
          );
        })}
      </div>
    </div>
  );
}
