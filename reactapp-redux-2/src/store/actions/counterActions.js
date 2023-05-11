export const incrementByAction = (state) => {
    state.value += 1
};

export const decrementByAction = (state) => {
    state.value -= 1
};

export const incrementByAmountAction = (state, action) => {
    state.value += action.payload
};