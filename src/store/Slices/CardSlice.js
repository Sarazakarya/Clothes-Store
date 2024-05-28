import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
    name: "cart",
    initialState: {
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        totalAmount: 0,
        totalPrice: 0,
    },
    reducers: {
        addToCart(state, action) {
            try {
                const productToAdd = action.payload;
                const { id, size, color, price } = productToAdd;
                const existingProductIndex = state.cart.findIndex(product =>
                    product.id === id &&
                    product.size === size &&
                    product.color === color
                );

                if (existingProductIndex !== -1) {
                    state.cart[existingProductIndex].amount++;
                    state.cart[existingProductIndex].totalPrice += price;
                } else {
                    state.cart.push({
                        ...productToAdd,
                        amount: 1,
                        totalPrice: price,
                    });
                }
                state.totalAmount++;
                state.totalPrice += price;

                // Update local storage
                localStorage.setItem('cart', JSON.stringify(state.cart));
            } catch (error) {
                console.log(error);
            }
        },
        removeCart(state, action) {
            try {
                const productToRemove = action.payload;
                const { id, size, color, price } = productToRemove;
                const existingProductIndex = state.cart.findIndex(product =>
                    product.id === id &&
                    product.size === size &&
                    product.color === color
                );

                if (existingProductIndex !== -1) {
                    const existingProduct = state.cart[existingProductIndex];
                    if (existingProduct.amount === 1) {
                        state.cart.splice(existingProductIndex, 1);
                    } else {
                        existingProduct.amount--;
                        existingProduct.totalPrice -= price;
                    }
                    state.totalAmount--;
                    state.totalPrice -= price;
                } else {
                    console.log("Product not found in cart:", productToRemove);
                }

                // Update local storage
                localStorage.setItem('cart', JSON.stringify(state.cart));
            } catch (error) {
                console.log(error);
            }
        },
    }
});

export const { addToCart, removeCart } = cardSlice.actions;
export default cardSlice.reducer;
