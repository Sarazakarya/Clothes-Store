import { Button, Tooltip } from "@material-tailwind/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../../store/Slices/CardSlice";

export default function Singleproducte() {
  let product = useSelector((state) => state.product.singleproduct);
  const { id } = useParams();
  const productSize = product[0].size ? product[0].size : "";
  const productColor = product[0].color ? product[0].color : "";
  const [size, setSize] = useState(productSize);
  const [colors, setColors] = useState(productColor);
  let dispatch = useDispatch();
  const isauth = useSelector((state) => state.Auth.user);
  const Navigate = useNavigate();
  return (
    <div>
      {product
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center py-10 gap-3
              "
            >
              <div className="pl-30 grow[2] ">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-[850px] rounded-lg"
                />
              </div>
              <div className="grow[3] ">
                <div className="max-w-lg">
                  {/* description-item */}
                  <h5 className="font-inter text-2xl tracking-normal leading-none pb-4 font-bold">
                    {item.name}
                  </h5>

                  <p className="text-gray-700 font-inter text-xl tracking-normal leading-none pb-4 font-bold">
                    15% OFF
                  </p>
                  <p className="text-gray-600 font-inter text-xl tracking-normal leading-none pb-4 font-bold">
                    {item.text}
                  </p>

                  {/* label */}
                  <div className="pb-4">
                    {item.size ? (
                      <div>
                        <label
                          htmlFor="size"
                          className="block text-sm text-gray-800 dark:text-white font-medium  "
                        >
                          pick your size
                        </label>
                        <select
                          name="color"
                          id="color"
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item?.size?.map((item, index) => {
                            return <option key={index}>{item}</option>;
                          })}
                        </select>
                      </div>
                    ) : (
                      <div>
                        <label
                          htmlFor="size"
                          className="block text-sm text-gray-800 dark:text-white font-medium  "
                        >
                          pick your size
                        </label>
                        <select
                          disabled={true}
                          name="color"
                          id="color"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item?.size?.map((item, index) => {
                            return <option key={index}>{item}</option>;
                          })}
                        </select>
                      </div>
                    )}
                  </div>

                  {/* color */}
                  <div className="pb-4">
                    <label
                      htmlFor="color"
                      className="block text-sm - text-gray-800 font-medium"
                    >
                      Pick a color
                    </label>
                    <select
                      name="color"
                      id="color"
                      onChange={(e) => setColors(e.target.value)}
                      className="w-full border border-gray-300 bg-gray-50 p-2.5 rounded-lg text-sm focus:ring-blue-500  focus:border-blue-500"
                    >
                      {item.color.map((color, index) => {
                        return <option key={index}>{color}</option>;
                      })}
                    </select>
                  </div>

                  {/* btn  */}
                  <Tooltip content="Add to Cart" placement="bottom">
                    <Button
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      onClick={() => {
                        isauth && isauth.authUser
                          ? dispatch(
                              addToCart({
                                id: item.id,
                                name: item.name,
                                img: item.img,
                                text: item.text,
                                size: size,
                                color: colors,
                                price: item.price,
                                amount: 1,
                                totalPrice: item.price,
                              })
                            )
                          : Navigate("/Login");
                      }}
                    >
                      Add To Card
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
