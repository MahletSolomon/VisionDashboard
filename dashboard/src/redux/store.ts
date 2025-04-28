import { configureStore } from "@reduxjs/toolkit";
import classReducer from "./classSlice";

// Configure the Redux store
const store = configureStore({
  reducer: {
    class: classReducer,
  },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type
export type AppDispatch = typeof store.dispatch;

export default store;