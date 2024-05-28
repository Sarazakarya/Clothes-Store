import React from "react";
import clothes from "../../assets/images/clothes.jpg";
import { useDispatch } from "react-redux";
import { filterProduct } from "../../store/Slices/ProductSlice";
import { Link } from "react-router-dom";
export default function NavigationBtn() {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-center items-center py-8">
        {buttons.map((btn, index) => {
          return (
            <div className="mr-4" key={index}>
              <Link to={"/filteredProducts/" + btn}>
                <button
                  className="text-black  outline p-4 outline-gray-200 hover:bg-gray-300 duration-300 ease-in-out "
                  onClick={() => {
                    dispatch(filterProduct(btn));
                  }}
                >
                  {btn}
                </button>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="bg-green-300 w-[50%] p-2 mx-auto rounded-md">
        <h3 className="text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SALES UP TO 50%
        </h3>
      </div>

      <div className="flex justify-center items-center py-4 ">
        <img
          src={clothes}
          alt="clothes"
          className="w-[70%] h-[600px]  rounded-md shadow-lg shadow-gray-600"
        />
      </div>
    </div>
  );
}
