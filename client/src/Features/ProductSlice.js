import { createSlice } from "@reduxjs/toolkit";
import { ProductsData } from "../ProductsData";
//Import the ProductsData from the ProductsData.js file.

//Create a variable for the initialState and assign the data from the ProductsData
const initialState = { value: ProductsData };
export const productSlice = createSlice({
  //create the reducters
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.value.push(action.payload);
    },
    deleteProduct: (state, action) => {},
    updateProduct: (state, action) => {},
  },
});
//export all the action
export const { addProduct, updateProduct, deleteProduct } =
  productSlice.actions;
//export the reducer
export default productSlice.reducer;
// WE USE default to import it in another page py any name i can chosse
