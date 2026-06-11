import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../api/products.json";

const initialState = {
  products: productsData,
  filteredProducts: productsData,
};

const productsSlice = createSlice({
  name: "products",

  initialState,

  reducers: {
    searchProducts: (state, action) => {
      state.filteredProducts =
        state.products.filter((product) =>
          product.name
            .toLowerCase()
            .includes(
              action.payload.toLowerCase()
            )
        );
    },

    filterByCategory: (
      state,
      action
    ) => {
      state.filteredProducts =
        state.products.filter(
          (product) =>
            product.category ===
            action.payload
        );
    },

    filterByPrice: (state, action) => {
      state.filteredProducts =
        state.products.filter(
          (product) =>
            product.price <=
            action.payload
        );
    },

    resetFilters: (state) => {
      state.filteredProducts =
        state.products;
    },
  },
});

export const {
  searchProducts,
  filterByCategory,
  filterByPrice,
  resetFilters,
} = productsSlice.actions;

export default productsSlice.reducer;