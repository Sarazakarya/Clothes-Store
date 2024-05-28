// FilterComponent.js
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";

export default function FilterComponent() {
  const products = useSelector((state) => state.product.filterProduct);
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const { type } = useParams();
  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-gray-600 text-4xl font-inter font-bold tracking-normal leading-none">
            {type}
          </h1>
        </div>

        <div className="grid grid-cols-4 justify-items-center py-8 gap-12 ">
          {products.map((product) => {
            return (
              <div key={product.id}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  text={product.text}
                  img={product.img}
                  price={product.price}
                  colors={product.color}
                  type={type}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
