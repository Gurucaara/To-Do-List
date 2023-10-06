import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";

const store = configureStore({
  // to do reducer
  reducer: {
    todo: todoReducer,
  },
});

export default store;
