import { configureStore } from "@reduxjs/toolkit";
import SliderSlice from "./Slices/SliderSlice";
import ProductSlice from "./Slices/ProductSlice";
import CardSlice from "./Slices/CardSlice";
import isAuth from "./Slices/AuthSlice";

export const store = configureStore({
    reducer: {
        slider: SliderSlice,
        product: ProductSlice,
        cart: CardSlice,
        Auth: isAuth

    }
})