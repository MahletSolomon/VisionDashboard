import { configureStore } from "@reduxjs/toolkit";
import classReducer from "./classSlice";

const store = configureStore({
    reducer: {
        class: classReducer,
    },
});

export default store;