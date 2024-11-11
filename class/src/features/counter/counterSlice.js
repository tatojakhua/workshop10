import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
};

const counterSlice = createSlice({
    name: "Counter",
    initialState,
    reducers: {
        increment: (state, actions) => {
            state.counter += actions.payload;
        },
        decrement: (state, actions) => {
            state.counter -= actions.payload;
        },
    },
});

export const { decrement, increment } = counterSlice.actions;

export default counterSlice.reducer;
