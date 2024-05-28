import { createSlice } from '@reduxjs/toolkit';
import { sliderData } from '../../assets/data/dummyData';


export const SliderSlice = createSlice({
    name: "slider",
    initialState: {
        value: 0,
        length: sliderData.length,
    },
    reducers: {
        Nextslide(state, action) {
            state.value = action.payload > state.length - 1 ? 0 : action.payload;
        },
        PerviousSlide(state, action) {
            state.value = action.payload < 0 ? state.length - 1 : action.payload
        },
        DotSlide(state, action) {
            const slide = action.payload;
            state.value = slide
        }

    },

});

export const { Nextslide, PerviousSlide, DotSlide } = SliderSlice.actions;
export default SliderSlice.reducer;
