import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice'

export const store = configureStore({
    reducer: {
        // count: counterReducer,
        counterReducer,
    },
})