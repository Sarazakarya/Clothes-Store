import React, { Fragment } from "react";
import {
  Dialog,
  Button,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "@material-tailwind/react";
import { removeCart } from "../../store/Slices/CardSlice";

export default function DialogComponent({ openModal, setOpen }) {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      {cart.length > 0 ? (
        <Fragment>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody
              divider
              className="flex flex-col justify-center items-start"
            >
              {cart.map((item, index) => {
                return (
                  <div key={index} className="flex flex-row w-full py-4">
                    <div className="w-1/2 flex justify-center">
                      <img
                        className="h-[125px] rounded-md"
                        src={item.img}
                        alt={item.name}
                      />
                    </div>
                    <div className="w-1/2 flex flex-col items-start px-4">
                      <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
                        {item.name}
                      </h4>
                      <div className="max-w-xs">
                        <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                          {item.text}
                        </p>
                      </div>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        Selected size:
                        <span className="ml-2">{item.size}</span>
                      </p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        Selected color:
                        <span
                          className="ml-2 rounded-full px-2"
                          style={{ backgroundColor: item.color }}
                        ></span>
                      </p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        Amount: <span className="ml-2">{item.amount}</span>
                      </p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        Single Item Price:
                        <span className="ml-2">{item.price}$</span>
                      </p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        Total Item Prices:
                        <span className="ml-2">{item.totalPrice}$</span>
                      </p>
                      <div className="pt-4">
                        <Tooltip
                          content="Remove from the Cart"
                          placement="bottom"
                        >
                          <Button
                            onClick={() => dispatch(removeCart(item))}
                            size="sm"
                            color="red"
                            ripple={true}
                            variant="filled"
                          >
                            Remove
                          </Button>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                );
              })}
            </DialogBody>
            <DialogFooter className="flex justify-start items-center">
              <p className="text-black text-base font-inter tracking-normal leading-none pt-2">
                Total Price of All Products: {totalPrice}$
              </p>
            </DialogFooter>
          </Dialog>
        </Fragment>
      ) : (
        <Fragment>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
          >
            <DialogHeader className="border-0 outline-0">
              Shopping Bag
            </DialogHeader>
            <DialogBody
              divider
              className="flex flex-col justify-center items-center"
            >
              <h1 className="text-black font-bold text-2xl tracking-normal leading-none">
                Your Cart Is Empty
              </h1>
            </DialogBody>
            <DialogFooter className="flex justify-start items-center">
              <p className="text-black text-base font-inter tracking-normal leading-none pt-2">
                Add Some Product
              </p>
            </DialogFooter>
          </Dialog>
        </Fragment>
      )}
    </div>
  );
}
