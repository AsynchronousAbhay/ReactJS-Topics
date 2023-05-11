import { createSlice } from '@reduxjs/toolkit';
import { incrementByAction, decrementByAction, incrementByAmountAction } from "../actions/counterActions";

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: incrementByAction,
        decrement: decrementByAction,
        incrementByAmount: incrementByAmountAction,
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;