import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DotSlide,
  Nextslide,
  PerviousSlide,
} from "../../store/Slices/SliderSlice";
import { sliderData } from "../../assets/data/dummyData";

export default function Slider() {
  const sliderIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();
  console.log(sliderIndex);
  return (
    <div>
      <div className="relative pb-4">
        <div className="">
          {sliderData.map((item) => {
            return (
              <div
                key={item.id}
                className={
                  parseInt(item.id) === sliderIndex
                    ? "opacity-100 duration-700 ease-in-out scale-100"
                    : "opacity-0 duration-700 ease-in-out scale-9"
                }
              >
                <div>
                  {parseInt(item.id) === sliderIndex && (
                    <img
                      className="h-[750px] w-full"
                      src={item.img}
                      alt="shoes"
                    ></img>
                  )}
                </div>
                <div className="absolute top-44  inset-x-1/4">
                  <p
                    className="text-white
                    text-4xl
                    font-inter
                    font-bold
                    tracking-normal
                    leading-none  
                     text-center"
                  >
                    {parseInt(item.id) === sliderIndex && item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex absolute bottom-12  left-[45%]">
        {sliderData.map((dot, index) => {
          return (
            <div className="mr-4" key={dot.id}>
              <div
                className={
                  index === sliderIndex
                    ? "bg-green-300 rounded-full p-2 cursor-pointer"
                    : "bg-white rounded-full p-2 cursor-pointer"
                }
                onClick={() => dispatch(DotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="absolute top-[70%] left-4 bg-white rounded-full p-2 hover:bg-green-300"
          onClick={() => dispatch(PerviousSlide(sliderIndex - 1))}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className="absolute top-[70%] right-4 bg-white rounded-full p-2 hover:bg-green-300"
          onClick={() => dispatch(Nextslide(sliderIndex + 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
