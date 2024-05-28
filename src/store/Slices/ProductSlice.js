import { createSlice } from '@reduxjs/toolkit';
import { storeData } from '../../assets/data/dummyData';

export const ProductSlice = createSlice({
    name: "product",
    initialState: {
        filterProduct:
            JSON.parse(sessionStorage.getItem('filterData')) || storeData,

        singleproduct:
            JSON.parse(sessionStorage.getItem('singleProduct')) || storeData
    },
    reducers: {
        filterProduct(state, action) {
            try {
                const filter = storeData.filter((item) => item.type === action.payload);
                state.filterProduct = filter;
                const saveState = JSON.stringify(filter);
                sessionStorage.setItem('filterData', saveState);
            } catch (error) {
                return error;
            }
        },
        singleproduct(state, action) {
            try {
                const oneProduct = state.filterProduct.filter((product) => product.id === action.payload);
                state.singleproduct = oneProduct;
                const productDtat = JSON.stringify(oneProduct);
                sessionStorage.setItem('singleProduct', productDtat)
            }
            catch (error) {
                return error;
            }
        }

    },
});

export const { filterProduct, singleproduct } = ProductSlice.actions;
export default ProductSlice.reducer;
