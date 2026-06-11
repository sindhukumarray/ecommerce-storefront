import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../api/products.json";

const initialState = {
  products: productsData,
  filteredProducts: productsData,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;