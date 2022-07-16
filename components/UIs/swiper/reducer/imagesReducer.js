import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    error: false,
    errorMessage: '',
    images: []
}

const imagesSlice = createSlice({
    name: 'images',
    initialState: INITIAL_STATE,
    reducers: {
        getImages(state, action) {
            state.images = action.payload;
        },

        getImagesError(state, action) {
            state.error = true;
            state.errorMessage = action.payload
        }
    }
});

const { actions, reducer: imagesReducer } = imagesSlice;
export const { getImages, getImagesError } = actions;
export default imagesReducer;