import { configureStore } from '@reduxjs/toolkit'
import counterReducre from './slice/counterSlice'
import imageReducre from "./slice/imageSlice";

export const store = configureStore({
  reducer: {
    counterReducre,
    imageReducre,
  },
})