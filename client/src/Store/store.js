import { configureStore } from "@reduxjs/toolkit";
//Import the productReducer
import productReducer from "../Features/ProductSlice";
export const store = configureStore({
  //Reducer configuration for product state
  reducer: {
    products: productReducer,
  },
});
