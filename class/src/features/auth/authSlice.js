import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userIsLoggedIn: false,
};

const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        signIn: (state) => {
            state.userIsLoggedIn = true;
        },
        singOut: (state) => {
            state.userIsLoggedIn = false;
        },
    },
});

export const { signIn, singOut } = authSlice.actions;

export default authSlice.reducer;
