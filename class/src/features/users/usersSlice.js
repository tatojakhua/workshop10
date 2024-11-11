import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoading: false,
    error: "",
};

export const initialUsersFetch = createAsyncThunk(
    "Users/initialFetch",
    async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        if (response.ok) {
            return response.json();
        }
        throw new Error("fetch error");
    }
);

const usersSlice = createSlice({
    name: "Users",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(initialUsersFetch.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(initialUsersFetch.fulfilled, (state, actions) => {
            state.users = actions.payload;
            state.isLoading = false;
        });
        builder.addCase(initialUsersFetch.rejected, (state, actions) => {
            state.error = actions.error;
            state.isLoading = false;
        });
    },
});

export default usersSlice.reducer;
