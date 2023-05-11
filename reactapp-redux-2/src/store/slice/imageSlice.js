import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    images: [],
};

export const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        loadImages: (state, action) => {
            state.images = action.payload;       
        },
    },
})

export const { loadImages } = imageSlice.actions;

export const asyncLoadImages = () => (dispatch, getState) => {
    // console.log(getState());
    fetch("https://picsum.photos/v2/list")
        .then((images) => images.json())
        .then((images) => {
            dispatch(loadImages(images))
        })
        .catch((err) => {
            console.log(err);
        });
}

export default imageSlice.reducer;