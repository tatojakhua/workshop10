import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./features/counter/counterSlice";
import authReducer from "./features/auth/authSlice";
import usersReducer from "./features/users/usersSlice";
const store = configureStore({
    reducer: {
        counter: counterReducers,
        auth: authReducer,
        users: usersReducer,
    },
});

export default store;
