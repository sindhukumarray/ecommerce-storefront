import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },

    searchProducts: (state, action) => {
      state.filteredProducts = state.products.filter(
        (product) =>
          product.title
            .toLowerCase()
            .includes(action.payload.toLowerCase())
      );
    },

    filterByCategory: (state, action) => {
      state.filteredProducts = state.products.filter(
        (product) =>
          product.category === action.payload
      );
    },

    filterByPrice: (state, action) => {
      state.filteredProducts = state.products.filter(
        (product) =>
          product.price <= action.payload
      );
    },

    resetFilters: (state) => {
      state.filteredProducts = state.products;
    },
  },
});

export const {
  setProducts,
  searchProducts,
  filterByCategory,
  filterByPrice,
  resetFilters,
} = productsSlice.actions;

export default productsSlice.reducer;